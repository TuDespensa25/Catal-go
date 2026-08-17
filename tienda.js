// v2/tienda.js — pinta el catalogo leyendo de Supabase.

(function () {
  "use strict";

  var estado = {
    productos: [],
    categorias: [],
    municipios: [],
    municipio: Number(localStorage.getItem("municipio")) || null,
    categoria: null,
    busca: "",
  };

  var $ = function (id) { return document.getElementById(id); };

  function escapar(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /** Nombre corto: "Alimentos/Cárnicos" se lee mejor como "Cárnicos". */
  function nombreCorto(nombre) {
    var partes = String(nombre || "").split("/");
    return partes[partes.length - 1].trim();
  }

  function tarjeta(p) {
    var final = precioFinal(p);
    var hayDescuento = Number(p.descuento_pct) > 0;
    var foto = urlCuadrada(p.imagen_id, ANCHO_IMAGEN.tarjeta);
    var srcset = srcSetImagen(p.imagen_id, ANCHO_IMAGEN.tarjeta);

    return '' +
      '<article class="producto">' +
        '<div class="producto__foto">' +
          '<a class="producto__enlace" href="producto.html?id=' + p.id + '" aria-label="Ver ' + escapar(p.nombre) + '">' +
          '<img src="' + escapar(foto) + '"' +
               (srcset ? ' srcset="' + escapar(srcset) + '"' : "") +
               ' alt="' + escapar(p.nombre) + '" loading="lazy" width="400" height="400"' +
               ' onerror="this.onerror=null;this.removeAttribute(\'srcset\');this.src=\'images/placeholder.webp\'">' +
          (hayDescuento
            ? '<span class="producto__descuento">-' + Math.round(p.descuento_pct) + '%</span>'
            : "") +
          '</a>' +
          '<button class="td-boton producto__agregar" data-id="' + p.id + '"' +
               ' aria-label="Añadir ' + escapar(p.nombre) + ' al carrito">+</button>' +
        '</div>' +
        '<div class="producto__datos">' +
          '<span class="producto__categoria">' + escapar(nombreCorto(p.categorias && p.categorias.nombre)) + '</span>' +
          '<a class="producto__enlace" href="producto.html?id=' + p.id + '">' +
            '<h3 class="producto__nombre">' + escapar(p.nombre) + '</h3>' +
          '</a>' +
          '<div class="producto__pie">' +
            '<div class="producto__precios">' +
              (hayDescuento
                ? '<div class="td-precio-antes">USD ' + Number(p.precio_usd).toFixed(2) + '</div>'
                : "") +
              '<div class="td-precio producto__precio">USD ' + final.toFixed(2) + '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</article>';
  }

  function visibles() {
    var texto = estado.busca.trim().toLowerCase();
    return estado.productos.filter(function (p) {
      if (estado.categoria && (!p.categorias || p.categorias.nombre !== estado.categoria)) return false;
      if (texto && p.nombre.toLowerCase().indexOf(texto) === -1) return false;
      return true;
    });
  }

  // En el catalogo real la categoria se llama "Combos" a secas. Los nombres
  // largos venian de TiendaOnline, la bifurcacion abandonada.
  var ES_COMBO = { "Combos": 1 };

  function esCombo(p) {
    return !!(p.categorias && ES_COMBO[p.categorias.nombre]);
  }

  function pintarCarrusel(id, lista) {
    var seccion = $("sec-" + id);
    seccion.hidden = lista.length === 0;
    if (lista.length) $(id).innerHTML = lista.map(tarjeta).join("");
  }

  function pintar() {
    var lista = visibles();
    // Las secciones destacadas solo tienen sentido en la vista completa: si
    // el cliente ya filtro o busco, estorban y esconden lo que pidio.
    var filtrando = !!estado.categoria || !!estado.busca.trim();

    if (filtrando) {
      ["combos", "ofertas", "nuevos"].forEach(function (s) { $("sec-" + s).hidden = true; });
      $("titulo-lista").textContent = estado.categoria
        ? nombreCorto(estado.categoria)
        : "Resultados";
    } else {
      pintarCarrusel("combos", lista.filter(esCombo));
      pintarCarrusel("ofertas", lista.filter(function (p) {
        return Number(p.descuento_pct) > 0 && !esCombo(p);
      }));
      pintarCarrusel("nuevos", lista.filter(function (p) {
        return p.reciente && Number(p.descuento_pct) === 0 && !esCombo(p);
      }));
      $("titulo-lista").textContent = "Todos los productos";
    }

    $("rejilla").innerHTML = lista.map(tarjeta).join("");
    $("cuenta").textContent = lista.length + (lista.length === 1 ? " producto" : " productos");

    var vacio = $("vacio");
    vacio.hidden = lista.length > 0;
    if (!lista.length) {
      vacio.textContent = estado.municipio
        ? "No hay productos que coincidan en tu municipio."
        : "No hay productos que coincidan.";
    }
  }

  // --- categorias ---

  // SVG en vez de emoji (ui-ux-pro-max: los emoji no son iconos, se ven
  // distinto en cada telefono). Se busca por coincidencia en el nombre real
  // de la categoria, asi que sigue funcionando si el admin la renombra a
  // algo parecido, y cae en el icono generico si no reconoce nada.
  var ICONOS_CATEGORIA = [
    [/c[aá]rnic/i,
      '<circle cx="9" cy="9" r="6"/><rect x="13" y="13" width="4" height="9" rx="2" transform="rotate(35 13 13)"/>'],
    [/l[aá]cte|huevo/i,
      '<path d="M9 2h6l1 4-1 1v13a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V7L8 6Z"/>'],
    [/cereal|grano|pasta/i,
      '<path d="M4 11a8 4 0 0 0 16 0Z"/><circle cx="9" cy="7" r="1.3"/><circle cx="13" cy="6" r="1.3"/><circle cx="16" cy="8" r="1.3"/>'],
    [/conserva|enlatad/i,
      '<rect x="6" y="7" width="12" height="14" rx="1.5"/><rect x="5" y="4" width="14" height="3" rx="1"/>'],
    [/l[ií]quid|bebida/i,
      '<path d="M12 2c4 6 7 10 7 13a7 7 0 0 1-14 0c0-3 3-7 7-13Z"/>'],
    [/aseo/i,
      '<rect x="9" y="8" width="6" height="13" rx="1.5"/><rect x="10" y="3" width="4" height="6" rx="1"/><circle cx="16" cy="6" r="1.4"/>'],
    [/agr[oi]|vegetal|fruta/i,
      '<path d="M12 3c5 1 8 5 8 10a8 8 0 0 1-16 0c0-5 3-9 8-10Z"/><path d="M12 5v16" stroke="var(--fondo)" stroke-width="1.4" fill="none"/>'],
    [/electrodom/i,
      '<rect x="4" y="4" width="16" height="16" rx="2.5"/><circle cx="12" cy="13" r="4" fill="var(--fondo)"/><rect x="7" y="6" width="3" height="1.6" rx="0.8" fill="var(--fondo)"/>'],
    [/combo/i,
      '<rect x="4" y="9" width="16" height="11" rx="1.5"/><rect x="3" y="5" width="18" height="4.5" rx="1.5"/><rect x="11" y="5" width="2" height="15"/>'],
  ];
  var ICONO_TODAS =
    '<rect x="3" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5"/>' +
    '<rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5"/>';
  var ICONO_GENERICO = '<circle cx="12" cy="12" r="9"/>';

  function iconoCategoria(nombre) {
    for (var i = 0; i < ICONOS_CATEGORIA.length; i++) {
      if (ICONOS_CATEGORIA[i][0].test(nombre)) return ICONOS_CATEGORIA[i][1];
    }
    return ICONO_GENERICO;
  }

  function pintarCategorias() {
    var usadas = {};
    estado.productos.forEach(function (p) {
      if (p.categorias) usadas[p.categorias.nombre] = true;
    });

    var botones = ['<button class="categoria" data-cat="" aria-pressed="' +
      (estado.categoria ? "false" : "true") + '">' +
      '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">' + ICONO_TODAS + '</svg>' +
      'Todas</button>'];

    estado.categorias.forEach(function (c) {
      if (!usadas[c.nombre]) return; // no ofrecer categorias vacias en este municipio
      botones.push('<button class="categoria" data-cat="' + escapar(c.nombre) + '" aria-pressed="' +
        (estado.categoria === c.nombre ? "true" : "false") + '">' +
        '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">' + iconoCategoria(c.nombre) + '</svg>' +
        escapar(nombreCorto(c.nombre)) + "</button>");
    });

    $("categorias").innerHTML = botones.join("");
  }

  function pintarMunicipios() {
    var html = "";
    var provincia = null;
    estado.municipios.forEach(function (m) {
      if (m.provincia !== provincia) {
        provincia = m.provincia;
        html += '<div class="hoja__provincia">' + escapar(provincia) + "</div>";
      }
      html += '<button type="button" class="municipio" data-mun="' + m.id + '" aria-pressed="' +
              (estado.municipio === m.id ? "true" : "false") + '">' + escapar(m.nombre) + "</button>";
    });
    $("lista-municipios").innerHTML = html;

    var elegido = estado.municipios.filter(function (m) { return m.id === estado.municipio; })[0];
    $("lugar-actual").textContent = elegido
      ? elegido.provincia + ", " + elegido.nombre
      : "Elige tu municipio";
  }

  function contador() {
    var n = carrito.unidades();
    var el = $("contador-carrito");
    el.textContent = n;
    el.hidden = n === 0;
  }

  async function cargar() {
    $("rejilla").innerHTML = new Array(6).join("x").split("x")
      .map(function () { return '<div class="esqueleto"></div>'; }).join("");
    try {
      var res = await Promise.all([
        cargarProductos(estado.municipio),
        estado.categorias.length ? estado.categorias : cargarCategorias(),
      ]);
      estado.productos = res[0];
      estado.categorias = res[1];
      pintarCategorias();
      pintar();
    } catch (e) {
      console.error(e);
      $("rejilla").innerHTML = "";
      var vacio = $("vacio");
      vacio.hidden = false;
      vacio.textContent = "No se pudo cargar el catálogo. Revisa tu conexión e inténtalo de nuevo.";
    }
  }

  // --- eventos ---

  $("buscar").addEventListener("input", function (e) {
    estado.busca = e.target.value;
    pintar();
  });

  $("categorias").addEventListener("click", function (e) {
    var b = e.target.closest(".categoria");
    if (!b) return;
    estado.categoria = b.dataset.cat || null;
    pintarCategorias();
    pintar();
  });

  // En <main>, no en #rejilla: los carruseles de Combos/Ofertas/Recien
  // llegados usan la misma tarjeta y el mismo boton, y se habian quedado
  // sin este listener, asi que "Añadir" no hacia nada ahi.
  document.querySelector("main").addEventListener("click", function (e) {
    var b = e.target.closest(".producto__agregar");
    if (!b) return;
    carrito.agregar(Number(b.dataset.id));
    contador();
    // Confirmacion breve en el propio boton: se ve sin apartar la vista
    // de la tarjeta que se acaba de tocar.
    b.textContent = "✓";
    b.classList.add("producto__agregar--hecho");
    setTimeout(function () {
      b.textContent = "+";
      b.classList.remove("producto__agregar--hecho");
    }, 900);
  });

  $("btn-lugar").addEventListener("click", function () { $("hoja-lugar").showModal(); });

  $("lista-municipios").addEventListener("click", function (e) {
    var b = e.target.closest(".municipio");
    if (!b) return;
    estado.municipio = Number(b.dataset.mun);
    localStorage.setItem("municipio", estado.municipio);
    pintarMunicipios();
    $("hoja-lugar").close();
    cargar();
  });

  // --- arranque ---

  guardarRef();
  contador();
  cargarMunicipios()
    .then(function (m) {
      estado.municipios = m;
      pintarMunicipios();
      // El numero de municipios en el encabezado sale de la base, nunca
      // escrito a mano: el dato viejo ("Artemisa y Pinar del Río") llevaba
      // meses mal porque nadie lo actualizo cuando cambio la cobertura real.
      if (m.length) {
        $("hero-cobertura").textContent = "Entrega a domicilio en los " +
          m.length + " municipios de " + m[0].provincia;
      }
    })
    .catch(function (e) { console.error(e); });
  cargar();
})();
