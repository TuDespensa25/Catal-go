// v2/admin.js — panel de productos.
//
// Todo lo que escribe pasa por RLS: la base solo deja guardar si es_admin()
// devuelve true para el usuario de la sesion. El panel no decide permisos,
// solo los refleja.

(function () {
  "use strict";

  var TASA = 340;
  var CARPETA = "tudespensa25/productos";

  var productos = [];
  var categorias = [];
  var municipios = [];
  var editando = null;
  var creando = false;    // true cuando el cajon esta creando, no editando
  var fotoNueva = null;   // public_id recien subido, aun sin guardar

  var $ = function (id) { return document.getElementById(id); };

  function escapar(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function precioConDescuento(precio, descuento) {
    return Math.round(precio * (1 - (descuento || 0) / 100) * 100) / 100;
  }

  // --- entrar / salir ---

  function mostrarPanel(hay) {
    $("entrar").hidden = hay;
    $("panel").hidden = !hay;
  }

  $("form-entrar").addEventListener("submit", async function (e) {
    e.preventDefault();
    var boton = $("btn-entrar");
    var error = $("error-entrar");
    error.hidden = true;
    boton.disabled = true;
    boton.textContent = "Entrando...";
    try {
      await sesion.entrar($("correo").value.trim(), $("clave").value);
      mostrarPanel(true);
      await cargar();
    } catch (err) {
      error.textContent = "No se pudo entrar. Revisa el correo y la contraseña.";
      error.hidden = false;
    } finally {
      boton.disabled = false;
      boton.textContent = "Entrar";
    }
  });

  $("btn-salir").addEventListener("click", function () {
    sesion.salir();
    mostrarPanel(false);
  });

  // --- lista ---

  function fila(p) {
    var final = precioConDescuento(Number(p.precio_usd), Number(p.descuento_pct));
    return '' +
      '<article class="admin__fila' + (p.visible ? "" : " admin__fila--oculto") + '" data-id="' + p.id + '">' +
        '<img class="admin__foto" src="' + escapar(urlCuadrada(p.imagen_id, 120)) + '" alt=""' +
             ' loading="lazy" width="48" height="48"' +
             ' onerror="this.onerror=null;this.src=\'images/placeholder.webp\'">' +
        '<div class="admin__datos">' +
          '<span class="admin__nombre">' + escapar(p.nombre) + '</span>' +
          '<span class="admin__categoria">' + escapar((p.categorias && p.categorias.nombre) || "sin categoría") + '</span>' +
        '</div>' +
        '<div class="admin__precio">' +
          '<span class="td-precio admin__cifra">USD ' + final.toFixed(2) + '</span>' +
          (Number(p.descuento_pct) > 0
            ? '<span class="td-chip admin__chip">-' + Math.round(p.descuento_pct) + '%</span>'
            : "") +
          (p.visible ? "" : '<span class="admin__oculto">Oculto</span>') +
        '</div>' +
        '<button class="admin__ojo" type="button" data-ocultar="' + p.id + '"' +
                ' aria-label="' + (p.visible ? "Ocultar de la tienda" : "Volver a mostrar en la tienda") + '"' +
                ' title="' + (p.visible ? "Ocultar de la tienda" : "Volver a mostrar") + '">' +
          (p.visible
            ? '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 5c-5 0-9.27 3.11-11 7.5 1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C21.27 8.11 17 5 12 5Zm0 12.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" fill="currentColor"/></svg>'
            : '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M2 4.27 3.28 3 21 20.72 19.73 22l-3.06-3.06c-1.44.5-2.99.79-4.67.79-5 0-9.27-3.11-11-7.5a12.5 12.5 0 0 1 4.09-5.5L2 4.27ZM12 7c-.5 0-.98.08-1.43.22l1.9 1.9A3 3 0 0 1 15 11.53l1.9 1.9C17.6 12.5 18 11.3 18 10a3 3 0 0 0-3-3 5 5 0 0 0 0 0M12 5c5 0 9.27 3.11 11 7.5a12.6 12.6 0 0 1-2.6 3.94l-1.42-1.42A10.6 10.6 0 0 0 21.06 12.5 10.98 10.98 0 0 0 12 7c-.66 0-1.3.05-1.93.14L8.62 5.7A13 13 0 0 1 12 5Z" fill="currentColor"/></svg>') +
        '</button>' +
      '</article>';
  }

  /**
   * Agrupada por categoria, en el orden en que el dueno las puso (el mismo
   * "orden" que decide como se ven en la tienda). Antes era una lista plana
   * y encontrar todo lo de "Cárnicos" era leerse las 75 filas.
   */
  function pintar() {
    var texto = $("buscar-admin").value.trim().toLowerCase();
    var lista = productos.filter(function (p) {
      return !texto || p.nombre.toLowerCase().indexOf(texto) !== -1;
    });

    var porCategoria = {};
    lista.forEach(function (p) {
      (porCategoria[p.categoria_id] = porCategoria[p.categoria_id] || []).push(p);
    });

    var ordenadas = categorias.slice().sort(function (a, b) { return a.orden - b.orden; });
    var html = "";
    ordenadas.forEach(function (c) {
      var grupo = porCategoria[c.id];
      if (!grupo || !grupo.length) return;
      html += '<div class="admin__grupo">' + escapar(c.nombre) +
              (c.activa ? "" : ' <span class="admin__grupo-oculta">oculta</span>') +
              '<span class="admin__grupo-n">' + grupo.length + "</span></div>";
      html += grupo.map(fila).join("");
    });

    $("lista-admin").innerHTML = html || '<p class="vacio">Sin resultados.</p>';
    $("cuenta-admin").textContent = lista.length + " de " + productos.length;
  }

  async function pedirCategorias() {
    var res = await fetch(window.SUPABASE_URL + "/rest/v1/categorias?select=id,nombre,orden,activa&order=orden",
                          { headers: await sesion.cabeceras() });
    return res.json();
  }

  function pintarSelectCategorias() {
    $("e-categoria").innerHTML = categorias.map(function (c) {
      return '<option value="' + c.id + '">' + escapar(c.nombre) +
             (c.activa ? "" : " (oculta)") + "</option>";
    }).join("");
  }

  async function cargar() {
    try {
      var res = await Promise.all([
        fetch(window.SUPABASE_URL + "/rest/v1/productos?select=id,nombre,descripcion," +
              "precio_usd,descuento_pct,imagen_id,visible,categoria_id,categorias(nombre)&order=nombre",
              { headers: await sesion.cabeceras() }).then(function (r) { return r.json(); }),
        pedirCategorias(),
        cargarMunicipios(),
      ]);
      productos = res[0];
      categorias = res[1];
      municipios = res[2];
      pintarSelectCategorias();
      pintar();
    } catch (e) {
      console.error(e);
      $("lista-admin").innerHTML = '<p class="vacio">No se pudo cargar. Revisa tu conexión.</p>';
    }
  }

  $("buscar-admin").addEventListener("input", pintar);

  $("lista-admin").addEventListener("click", function (e) {
    var ojo = e.target.closest(".admin__ojo");
    if (ojo) { alternarVisible(Number(ojo.dataset.ocultar), ojo); return; }
    var f = e.target.closest(".admin__fila");
    if (f) abrir(Number(f.dataset.id));
  });

  /**
   * Oculta o vuelve a mostrar un producto sin abrir la ficha. Es lo mismo
   * que el interruptor "Visible en la tienda" de dentro, pero en un toque:
   * es la accion del dia a dia ("hoy no hay pollo") y abrir/bajar/guardar
   * cada vez era demasiado para algo que se hace varias veces al dia.
   */
  async function alternarVisible(id, boton) {
    var p = productos.filter(function (x) { return x.id === id; })[0];
    if (!p || boton.disabled) return;
    var nuevoValor = !p.visible;

    boton.disabled = true;
    try {
      var res = await fetch(window.SUPABASE_URL + "/rest/v1/productos?id=eq." + id, {
        method: "PATCH",
        headers: Object.assign(await sesion.cabeceras(), { Prefer: "return=representation" }),
        body: JSON.stringify({ visible: nuevoValor }),
      });
      var datos = await res.json();
      if (!res.ok || !datos.length) throw new Error("no se pudo cambiar");

      p.visible = nuevoValor;
      pintar();
    } catch (e) {
      console.error(e);
      alert("No se pudo " + (nuevoValor ? "mostrar" : "ocultar") + " el producto. Inténtalo de nuevo.");
      boton.disabled = false;
    }
  }

  // --- categorias ---
  //
  // Sin borrar de verdad: categoria_id en productos es "on delete restrict",
  // asi que borrar una categoria con productos dentro fallaria con un error
  // de base de datos feo. En vez de eso se oculta (activa=false), igual que
  // el ojo de los productos: sigue existiendo, deja de ofrecerse, y se puede
  // reactivar cuando haga falta.

  function filaCategoria(c) {
    return '' +
      '<div class="cat-fila' + (c.activa ? "" : " cat-fila--oculta") + '" data-id="' + c.id + '">' +
        '<input class="td-campo cat-nombre" type="text" value="' + escapar(c.nombre) + '" data-id="' + c.id + '">' +
        '<div class="cat-acciones">' +
          '<button class="cat-flecha" type="button" data-subir="' + c.id + '" aria-label="Subir">↑</button>' +
          '<button class="cat-flecha" type="button" data-bajar="' + c.id + '" aria-label="Bajar">↓</button>' +
          '<button class="admin__ojo" type="button" data-cat-ojo="' + c.id + '"' +
                  ' aria-label="' + (c.activa ? "Ocultar categoría" : "Mostrar categoría") + '">' +
            (c.activa
              ? '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 5c-5 0-9.27 3.11-11 7.5 1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C21.27 8.11 17 5 12 5Zm0 12.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" fill="currentColor"/></svg>'
              : '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M2 4.27 3.28 3 21 20.72 19.73 22l-3.06-3.06c-1.44.5-2.99.79-4.67.79-5 0-9.27-3.11-11-7.5a12.5 12.5 0 0 1 4.09-5.5L2 4.27ZM12 7c-.5 0-.98.08-1.43.22l1.9 1.9A3 3 0 0 1 15 11.53l1.9 1.9C17.6 12.5 18 11.3 18 10a3 3 0 0 0-3-3 5 5 0 0 0 0 0M12 5c5 0 9.27 3.11 11 7.5a12.6 12.6 0 0 1-2.6 3.94l-1.42-1.42A10.6 10.6 0 0 0 21.06 12.5 10.98 10.98 0 0 0 12 7c-.66 0-1.3.05-1.93.14L8.62 5.7A13 13 0 0 1 12 5Z" fill="currentColor"/></svg>') +
          '</button>' +
        '</div>' +
      '</div>';
  }

  function pintarDialogoCategorias() {
    var ordenadas = categorias.slice().sort(function (a, b) { return a.orden - b.orden; });
    $("cat-lista").innerHTML = ordenadas.map(filaCategoria).join("");
  }

  async function abrirCategorias() {
    $("error-categorias").hidden = true;
    pintarDialogoCategorias();
    $("dialogo-categorias").showModal();
  }

  /** Tras cualquier cambio: refresca la lista local y todo lo que la muestra. */
  async function refrescarCategorias() {
    categorias = await pedirCategorias();
    pintarDialogoCategorias();
    pintarSelectCategorias();
    pintar();
  }

  function errorCategorias(msg) {
    $("error-categorias").textContent = msg;
    $("error-categorias").hidden = false;
  }

  $("btn-categorias").addEventListener("click", abrirCategorias);
  $("categorias-x").addEventListener("click", function () { $("dialogo-categorias").close(); });
  $("categorias-listo").addEventListener("click", function () { $("dialogo-categorias").close(); });

  $("cat-lista").addEventListener("click", async function (e) {
    var ojo = e.target.closest("[data-cat-ojo]");
    var subir = e.target.closest("[data-subir]");
    var bajar = e.target.closest("[data-bajar]");
    if (ojo) return alternarCategoria(Number(ojo.dataset.catOjo), ojo);
    if (subir) return moverCategoria(Number(subir.dataset.subir), -1);
    if (bajar) return moverCategoria(Number(bajar.dataset.bajar), 1);
  });

  $("cat-lista").addEventListener("change", function (e) {
    var input = e.target.closest(".cat-nombre");
    if (input) renombrarCategoria(Number(input.dataset.id), input.value.trim(), input);
  });

  async function alternarCategoria(id, boton) {
    var c = categorias.filter(function (x) { return x.id === id; })[0];
    if (!c || boton.disabled) return;
    boton.disabled = true;
    try {
      var res = await fetch(window.SUPABASE_URL + "/rest/v1/categorias?id=eq." + id, {
        method: "PATCH",
        headers: Object.assign(await sesion.cabeceras(), { Prefer: "return=representation" }),
        body: JSON.stringify({ activa: !c.activa }),
      });
      var datos = await res.json();
      if (!res.ok || !datos.length) throw new Error();
      await refrescarCategorias();
    } catch (e) {
      errorCategorias("No se pudo cambiar. ¿Tu usuario es administrador?");
      boton.disabled = false;
    }
  }

  async function renombrarCategoria(id, nombre, input) {
    var c = categorias.filter(function (x) { return x.id === id; })[0];
    if (!c || !nombre || nombre === c.nombre) { input.value = c ? c.nombre : input.value; return; }
    try {
      var res = await fetch(window.SUPABASE_URL + "/rest/v1/categorias?id=eq." + id, {
        method: "PATCH",
        headers: Object.assign(await sesion.cabeceras(), { Prefer: "return=representation" }),
        body: JSON.stringify({ nombre: nombre }),
      });
      var datos = await res.json();
      if (!res.ok || !datos.length) throw new Error(datos.message || "");
      await refrescarCategorias();
    } catch (e) {
      errorCategorias(/duplicate|unique/i.test(e.message || "")
        ? "Ya existe una categoría con ese nombre."
        : "No se pudo renombrar.");
      input.value = c.nombre;
    }
  }

  /**
   * Intercambia el "orden" con la vecina de al lado. Dos PATCH en vez de
   * renumerar todas: son 10 categorias como mucho, y asi un fallo a medias
   * como mucho deja dos filas cambiadas, nunca la lista entera desordenada.
   */
  async function moverCategoria(id, direccion) {
    var ordenadas = categorias.slice().sort(function (a, b) { return a.orden - b.orden; });
    var i = ordenadas.findIndex(function (c) { return c.id === id; });
    var j = i + direccion;
    if (i < 0 || j < 0 || j >= ordenadas.length) return;

    var a = ordenadas[i], b = ordenadas[j];
    try {
      var cab = await sesion.cabeceras();
      var r1 = await fetch(window.SUPABASE_URL + "/rest/v1/categorias?id=eq." + a.id, {
        method: "PATCH", headers: cab, body: JSON.stringify({ orden: b.orden }),
      });
      var r2 = await fetch(window.SUPABASE_URL + "/rest/v1/categorias?id=eq." + b.id, {
        method: "PATCH", headers: cab, body: JSON.stringify({ orden: a.orden }),
      });
      if (!r1.ok || !r2.ok) throw new Error();
      await refrescarCategorias();
    } catch (e) {
      errorCategorias("No se pudo reordenar.");
    }
  }

  $("form-cat-nueva").addEventListener("submit", async function (e) {
    e.preventDefault();
    var campo = $("cat-nombre-nueva");
    var nombre = campo.value.trim();
    if (!nombre) return;

    var maxOrden = categorias.reduce(function (m, c) { return Math.max(m, c.orden); }, 0);
    try {
      var res = await fetch(window.SUPABASE_URL + "/rest/v1/categorias", {
        method: "POST",
        headers: Object.assign(await sesion.cabeceras(), { Prefer: "return=representation" }),
        body: JSON.stringify({ nombre: nombre, orden: maxOrden + 1 }),
      });
      var datos = await res.json();
      if (!res.ok || !datos.length) throw new Error((datos && datos.message) || "");
      campo.value = "";
      await refrescarCategorias();
    } catch (err) {
      errorCategorias(/duplicate|unique/i.test(err.message || "")
        ? "Ya existe una categoría con ese nombre."
        : "No se pudo crear la categoría.");
    }
  });

  // --- editar ---

  function pintarMunicipios(marcados) {
    var elegidos = marcados || [];
    var html = "";
    var provincia = null;
    municipios.forEach(function (m) {
      if (m.provincia !== provincia) {
        provincia = m.provincia;
        html += '<div class="hoja__provincia">' + escapar(provincia) + "</div>";
      }
      html += '<label class="municipio-check">' +
                '<input type="checkbox" value="' + m.id + '"' +
                (elegidos.indexOf(m.id) !== -1 ? " checked" : "") + ">" +
                "<span>" + escapar(m.nombre) + "</span>" +
              "</label>";
    });
    $("e-municipios").innerHTML = html;
  }

  function municipiosMarcados() {
    return [].slice.call($("e-municipios").querySelectorAll("input:checked"))
             .map(function (i) { return Number(i.value); });
  }

  async function abrir(id) {
    creando = false;
    editando = productos.filter(function (p) { return p.id === id; })[0];
    if (!editando) return;
    fotoNueva = null;

    $("cajon-titulo").textContent = editando.nombre;
    $("e-nombre").value = editando.nombre;
    $("e-descripcion").value = editando.descripcion || "";
    $("e-categoria").value = editando.categoria_id || "";
    $("e-precio").value = Number(editando.precio_usd).toFixed(2);
    $("e-descuento").value = Math.round(Number(editando.descuento_pct));
    $("e-visible").checked = !!editando.visible;

    var img = $("vista-previa");
    img.src = urlCuadrada(editando.imagen_id, 300);
    img.hidden = false;
    $("soltar-texto").textContent = "Toca para cambiar la foto";
    $("error-guardar").hidden = true;
    $("borrar").hidden = false;

    pintarMunicipios([]);
    recalcular();
    $("cajon").showModal();

    // La disponibilidad se pide aparte para no cargarla de los 155 a la vez.
    try {
      var res = await fetch(window.SUPABASE_URL +
        "/rest/v1/producto_municipios?select=municipio_id&producto_id=eq." + id,
        { headers: await sesion.cabeceras() });
      pintarMunicipios((await res.json()).map(function (r) { return r.municipio_id; }));
    } catch (e) { console.error(e); }
  }

  function abrirNuevo() {
    creando = true;
    editando = { id: null };
    fotoNueva = null;

    $("cajon-titulo").textContent = "Nuevo producto";
    $("e-nombre").value = "";
    $("e-descripcion").value = "";
    $("e-categoria").selectedIndex = 0;
    $("e-precio").value = "";
    $("e-descuento").value = "0";
    $("e-visible").checked = true;

    $("vista-previa").hidden = true;
    $("soltar-texto").textContent = "Toca para elegir una foto del teléfono";
    $("error-guardar").hidden = true;
    $("borrar").hidden = true;

    // Por defecto se vende en toda la zona: es lo mas comun y quitar es mas
    // rapido que marcar trece casillas.
    pintarMunicipios(municipios.map(function (m) { return m.id; }));
    recalcular();
    $("cajon").showModal();
  }

  $("btn-nuevo").addEventListener("click", abrirNuevo);
  $("todos-municipios").addEventListener("click", function () {
    pintarMunicipios(municipios.map(function (m) { return m.id; }));
  });
  $("ningun-municipio").addEventListener("click", function () { pintarMunicipios([]); });

  function recalcular() {
    var precio = Number($("e-precio").value) || 0;
    var desc = Number($("e-descuento").value) || 0;
    var final = precioConDescuento(precio, desc);
    $("calculado").textContent = desc > 0
      ? "Precio final: USD " + final.toFixed(2) + " · " + milesCUP(enCUP(final, TASA)) + " CUP"
      : "USD " + precio.toFixed(2) + " · " + milesCUP(enCUP(precio, TASA)) + " CUP";
  }

  $("e-precio").addEventListener("input", recalcular);
  $("e-descuento").addEventListener("input", recalcular);
  $("cajon-x").addEventListener("click", function () { $("cajon").close(); });
  $("cancelar").addEventListener("click", function () { $("cajon").close(); });

  // --- foto ---

  $("soltar").addEventListener("click", function () { $("archivo").click(); });

  $("archivo").addEventListener("change", async function (e) {
    var archivo = e.target.files[0];
    if (!archivo) return;

    $("soltar-texto").textContent = "Subiendo la foto...";
    try {
      fotoNueva = await subirFoto(archivo, editando);
      $("vista-previa").src = urlCuadrada(fotoNueva, 300);
      $("vista-previa").hidden = false;
      $("soltar-texto").textContent = "Foto lista. Pulsa Guardar para aplicarla.";
    } catch (err) {
      console.error(err);
      fotoNueva = null;
      $("soltar-texto").textContent = "No se pudo subir la foto. Inténtalo otra vez.";
    }
  });

  /**
   * Sube a Cloudinary con el preset sin firma.
   * Lleva la hora en el nombre a proposito: una subida sin firma NUNCA
   * sobrescribe, asi que reutilizar el nombre devolveria la foto vieja con
   * un 200 y parecerian que funciono.
   */
  async function subirFoto(archivo, producto) {
    // Un producto nuevo aun no tiene id, asi que se nombra "nuevo-<hora>".
    var base = (producto && producto.id ? String(producto.id) : "nuevo") + "-" + Date.now();
    var form = new FormData();
    form.append("file", archivo);
    form.append("upload_preset", window.CLOUDINARY_UPLOAD_PRESET);
    form.append("public_id", CARPETA + "/" + base);
    form.append("asset_folder", CARPETA);
    form.append("tags", "tudespensa25,producto");

    var res = await fetch("https://api.cloudinary.com/v1_1/" +
                          window.CLOUDINARY_CLOUD_NAME + "/image/upload",
                          { method: "POST", body: form });
    var datos = await res.json();
    if (!res.ok) throw new Error((datos.error && datos.error.message) || "fallo al subir");
    return datos.public_id;
  }

  // --- guardar ---

  $("guardar").addEventListener("click", async function () {
    if (!editando) return;
    var boton = $("guardar");
    var error = $("error-guardar");
    error.hidden = true;
    boton.disabled = true;
    boton.textContent = "Guardando...";

    var cambios = {
      nombre: $("e-nombre").value.trim(),
      descripcion: $("e-descripcion").value.trim(),
      categoria_id: Number($("e-categoria").value) || null,
      precio_usd: Number($("e-precio").value) || 0,
      descuento_pct: Number($("e-descuento").value) || 0,
      visible: $("e-visible").checked,
    };
    if (fotoNueva) cambios.imagen_id = fotoNueva;

    try {
      if (!cambios.nombre) throw new Error("El producto necesita un nombre.");
      if (!cambios.categoria_id) throw new Error("Elige una categoría.");
      if (creando && !cambios.precio_usd) throw new Error("Pon un precio.");

      var cab = await sesion.cabeceras();
      var res = await fetch(
        window.SUPABASE_URL + "/rest/v1/productos" + (creando ? "" : "?id=eq." + editando.id),
        {
          method: creando ? "POST" : "PATCH",
          headers: Object.assign(cab, { Prefer: "return=representation" }),
          body: JSON.stringify(cambios),
        }
      );
      var datos = await res.json();
      if (!res.ok) throw new Error(datos.message || "no se pudo guardar");
      if (!datos.length) throw new Error("La base no dejó guardar. ¿Tu usuario es administrador?");

      var guardado = datos[0];
      await guardarMunicipios(guardado.id, municipiosMarcados());

      guardado.categorias = categorias.filter(function (c) { return c.id === cambios.categoria_id; })[0] || null;
      if (creando) productos.push(guardado);
      else Object.assign(editando, guardado);

      productos.sort(function (a, b) { return a.nombre.localeCompare(b.nombre); });
      pintar();
      $("cajon").close();
    } catch (e) {
      error.textContent = e.message;
      error.hidden = false;
    } finally {
      boton.disabled = false;
      boton.textContent = "Guardar";
    }
  });

  /**
   * Deja la disponibilidad exactamente como la dejo el usuario.
   * Borra y vuelve a insertar en vez de calcular la diferencia: son trece
   * filas como mucho, y asi no hay estados a medias si algo falla.
   */
  async function guardarMunicipios(productoId, ids) {
    var cab = await sesion.cabeceras();
    var base = window.SUPABASE_URL + "/rest/v1/producto_municipios";

    var borrado = await fetch(base + "?producto_id=eq." + productoId, { method: "DELETE", headers: cab });
    if (!borrado.ok) throw new Error("no se pudo actualizar la disponibilidad");

    if (!ids.length) return;
    var puesto = await fetch(base, {
      method: "POST",
      headers: cab,
      body: JSON.stringify(ids.map(function (m) {
        return { producto_id: productoId, municipio_id: m };
      })),
    });
    if (!puesto.ok) throw new Error("no se pudo guardar en qué municipios se vende");
  }

  // --- borrar ---

  $("borrar").addEventListener("click", async function () {
    if (!editando || creando) return;
    var nombre = editando.nombre;
    if (!confirm('¿Borrar "' + nombre + '"?\n\nLos pedidos que ya lo incluyen no cambian: ' +
                 'guardan copia del nombre y del precio.\n\nSi solo quieres que deje de ' +
                 'venderse, cierra esto y desmarca "Visible en la tienda".')) return;

    var boton = $("borrar");
    boton.disabled = true;
    boton.textContent = "Borrando...";
    try {
      var res = await fetch(window.SUPABASE_URL + "/rest/v1/productos?id=eq." + editando.id, {
        method: "DELETE",
        headers: Object.assign(await sesion.cabeceras(), { Prefer: "return=representation" }),
      });
      var datos = await res.json();
      if (!res.ok) throw new Error(datos.message || "no se pudo borrar");
      if (!datos.length) throw new Error("La base no dejó borrar. ¿Tu usuario es administrador?");

      productos = productos.filter(function (p) { return p.id !== editando.id; });
      pintar();
      $("cajon").close();
    } catch (e) {
      $("error-guardar").textContent = e.message;
      $("error-guardar").hidden = false;
    } finally {
      boton.disabled = false;
      boton.textContent = "Borrar este producto";
    }
  });

  // --- arranque ---

  if (sesion.hay()) { mostrarPanel(true); cargar(); }
  else mostrarPanel(false);
})();
