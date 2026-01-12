// Data
const municipalities = [
  { id: 1, name: 'Artemisa, San Cristóbal' },
  { id: 2, name: 'Artemisa, Candelaria' },
  { id: 4, name: 'Artemisa, Mariel' },
  { id: 5, name: 'Artemisa, Guanajay' },
  { id: 6, name: 'Artemisa, Caimito' },
  { id: 7, name: 'Artemisa, Bauta' },
  { id: 8, name: 'Artemisa, Artemisa' },
  { id: 9, name: 'Artemisa, Alquízar' },
  { id: 10, name: 'Artemisa, Güira de Melena' },
  { id: 11, name: 'Artemisa, San Antonio de los Baños' },
];

const categories = [
  { id: 'combo', name: 'Combos', icon: 'icon-basket', backgroundImage: '/images/aseo.png' },
  { id: 'carnicos', name: 'Cárnicos y embutidos', icon: 'icon-beef', backgroundImage: '/images/carnicos.png' },
  { id: 'cereales', name: 'Cereales, pastas y granos', icon: 'icon-wheat', backgroundImage: '/images/cereales.png' },
  { id: 'lacteos', name: 'Lácteos y huevos', icon: 'icon-milk', backgroundImage: '/images/lacteos.png' },
  { id: 'conserva', name: 'Conserva y enlatados', icon: 'icon-can', backgroundImage: '/images/conserva.png' },
  { id: 'mercado', name: 'Mercado', icon: 'icon-basket', backgroundImage: '/images/mercado.png' },
  { id: 'aseo', name: 'Aseo', icon: 'icon-broom', backgroundImage: '/images/aseo.png' },
  { id: 'agro', name: 'Agrito', icon: 'icon-basket', backgroundImage: '/images/aseo.png' },
  { id: 'liquido', name: 'Líquidos', icon: 'icon-basket', backgroundImage: '/images/aseo.png' },
  { id: 'electro', name: 'Electrodomésticos', icon: 'icon-basket', backgroundImage: '/images/aseo.png' },
  
];

const productData = [
  // Cárnicos y embutidos
  /*{ id: 1, name: 'Pollo caja de 40 lb 4 paquetes de 10 lb', category: 'carnicos', description: 'Caja de 40 lb de pollo', image: '/images/pollo_caja.png', price: 43, availableIn: [ 3, 4, 5, 6, 7, 8, 9, 10, 11] },*/
  { id: 40, name: 'Pollo caja de 33 lb de postas', category: 'carnicos', description: 'Caja de 33 lb de pollo', image: '/images/pollo_caja33.png', price: 38, availableIn: [1,2] },
  { id: 42, name: 'Lomo de Cerdo Importado ', category: 'carnicos', description: 'Porción de 3 Lb', image: '/images/lomo.png', price: 11.2, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 2, name: 'Pollo paquete de 10 lb', category: 'carnicos', description: 'Paquete de 10 lb de pollo', image: '/images/pollo10lb.png', price: 11.4, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
 { id: 88, name: 'Pollo paquete de 11 lb', category: 'carnicos', description: 'Paquete de 11 lb de pollo', image: '/images/pollo10lb.png', price: 13.2, availableIn: [1, 2, ] },
  { id: 3, name: 'Pechuga paquete de 2 kg', category: 'carnicos', description: 'Pechuga de pollo 2 kg', image: '/images/pechuga2kg.png', price: 14, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  /*{ id: 4, name: 'Bandeja de 2 lb de bistec pechuga', category: 'carnicos', description: 'Bistec de pechuga 2 lb', image: '/images/bistecpechuga.png', price: 9.25, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },*/
  /*{ id: 41, name: 'Caja de pollo de 40 Lb Postas', category: 'carnicos', description: 'Caja de 40 lb de pollo', image: '/images/pollo_caja40agranel.png', price: 42, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },*/
  { id: 5, name: 'Chuleta de lomo deshuesado 2 lb', category: 'carnicos', description: 'Chuleta de lomo deshuesado', image: '/images/chuletalomo.png', price: 8.5, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 6, name: 'Masas de cerdo 2 lb', category: 'carnicos', description: 'Masas de cerdo 2 lb', image: '/images/masas.png', price: 8, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 7, name: 'Bistec de cerdo 2 lb', category: 'carnicos', description: 'Bistec de cerdo 2 lb', image: '/images/bisteclomo.png', price: 9, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  /*{ id: 8, name: 'Lomo ahumado 2 lb lasqueado', category: 'carnicos', description: 'Lomo ahumado lasqueado', image: '/images/ahumadolasqueado.png', price: 4.6, availableIn: [4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 9, name: 'Lomo ahumado importado 2 lb', category: 'carnicos', description: 'Lomo ahumado deshuesado 1 lb', image: '/images/ahumado.png', price: 4.6, availableIn: [4, 5, 6, 7, 8, 9, 10, 11] },*/
  { id: 10, name: 'Picadillo 400 gr de pollo', category: 'carnicos', description: 'Picadillo de pollo 400 gr', image: '/images/picadillo.png', price: 1.85, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 11, name: 'Hamburguesas mixtas de pollo y cerdo', category: 'carnicos', description: 'Hamburguesas mixtas de pollo y cerdo', image: '/images/hamburguesas.png', price: 2.3, availableIn: [4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 12, name: 'Mortadella Seara de Pollo ', category: 'carnicos', description: 'Mortadella de 500 gr', image: '/images/seara500.png', price: 2.3, availableIn: [1, 2, 3] },
  { id: 13, name: 'Mortadella clásica', category: 'carnicos', description: 'Mortadella clásica', image: '/images/mortclasica.png', price:2.3, availableIn: [1, 2, ] },
  { id: 14, name: 'Mortadela de queso', category: 'carnicos', description: 'Mortadella de queso', image: '/images/mortqueso.png', price: 2.3, availableIn: [1, 2,] },
  { id: 15, name: 'Mortadela de aceituna', category: 'carnicos', description: 'Mortadella con aceituna', image: '/images/mortaceit.png', price: 2.3, availableIn: [4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 45, name: 'Carne de Res troceada', category: 'carnicos', description: 'Bolsa de 1 Kg', image: '/images/restroceada.png', price: 14.4, availableIn: [4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 17, name: 'Hígado de pollo 1 kg', category: 'carnicos', description: 'Hígado de pollo 1 kg', image: '/images/higado.png', price: 2.60, availableIn: [4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 18, name: 'Salchichas', category: 'carnicos', description: 'Salchichas', image: '/images/salchichas.png', price:1.75, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
 /* { id: 50, name: 'Muslo de pollo ahumado', category: 'carnicos', description: 'Bolsa de 3 Lb', image: '/images/polloahumado.png', price: 7, availableIn: [3, 4, 5, 6, 7, 8, 9, 10, 11] },*/

  // Lácteos y Huevos
  { id: 19, name: 'Leche entera 1 kg', category: 'lacteos', description: 'Leche entera 1 kg', image: '/images/leche1kg.png', price: 10, availableIn: [1,2,3] },
  { id: 20, name: 'Cartón de huevos', category: 'lacteos', description: 'Cartón de huevos frescos', image: '/images/huevo30.png', price: 8.5, availableIn: [4,5,6,7,8,9,10,11] },
 /* { id: 21, name: 'Yogurt de fresa 1 L', category: 'lacteos', description: 'Yogurt de fresa 1 L', image: '/images/yogurt1L.png', price: 3.3, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },*/
  { id: 22, name: 'Leche condensada de cajita', category: 'lacteos', description: 'Leche condensada de cajita', image: '/images/cajitaleche.png', price: 1.65, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 23, name: 'Leche condensada lata', category: 'lacteos', description: 'Leche condensada lata', image: '/images/nezkaleche.png', price: 1.8, availableIn: [] },
  { id: 55, name: 'Helado', category: 'lacteos', description: 'Cubeta de 3L', image: '/images/helado.png', price: 9, availableIn: [,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
  { id: 57, name: 'Leche en Polvo', category: 'lacteos', description: 'Bolsa de 1 kg', image: '/images/lechepolvomu.png', price: 8.5, availableIn: [,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
  { id: 58, name: 'Cartón de huevos', category: 'lacteos', description: '30 uds frescos 100% orgánicos', image: '/images/huevo30.png', price: 9.4, availableIn: [1,2,3,,19,20,21,22,23,24,25,26,27] },

  // Cereales, Pastas y Granos
  { id: 24, name: 'Frijol negro 1 lb', category: 'cereales', description: 'Frijol negro 1 lb', image: '/images/frijol2lb.png', price: 1.2, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 25, name: 'Arroz Grano Largo', category: 'cereales', description: 'Arroz bolsa 2 lb', image: '/images/arroz2lb.png', price: 1.9, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 26, name: 'Sal 1 lb', category: 'cereales', description: 'Sal 1 lb', image: '/images/sal.png', price: 0.65, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 27, name: 'Azúcar 2 lb', category: 'cereales', description: 'Azúcar 2 lb', image: '/images/azucar2lb.png', price: 1.95, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 28, name: 'Spaguetis', category: 'cereales', description: 'Spaguetis', image: '/images/spaguetis.png', price:1.2, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 29, name: 'Arroz Grano Largo 25 kg (55 lb)', category: 'cereales', description: 'Saco de arroz  25 kg (55 lb)', image: '/images/arroz25kgsur.png', price: 45, availableIn: [1,3,2] },
  { id: 44, name: 'Arroz Grano Largo 25 kg (55 lb)', category: 'cereales', description: 'Saco de arroz  25 kg (55 lb)', image: '/images/Arroz55lbguy.png', price: 45, availableIn: [] },
  { id: 30, name: 'Harina de trigo 1 kg', category: 'cereales', description: 'Harina de trigo 1 kg', image: '/images/harinafresko.png', price: 2.3, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 53, name: 'Frijoles Blanco Del Campo ', category: 'cereales', description: 'Bolsa de 16 OZ', image: '/images/alubiasdelcampo.png', price: 2.4, availableIn: [4,5,6,7,8,9,10,11,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },

  // Conserva y Enlatados
  { id: 31, name: 'Pasta de tomate 400 gr', category: 'conserva', description: 'Pasta de tomate 400 gr', image: '/images/pasta400.png', price: 1.6, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 43, name: 'Pasta de tomate Vima 3 Kg', category: 'conserva', description: 'Pasta de tomate 3 Kg', image: '/images/vima3kg.png', price: 9.4, availableIn: [4,5,6,7,8,9,10,11] },
  { id: 32, name: 'Pasta de tomate 800 gr', category: 'conserva', description: 'Pasta de tomate 800 gr', image: '/images/800gr.png', price: 3.5, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 33, name: 'Leche condensada cocinada', category: 'conserva', description: 'Leche condensada cocinada', image: '/images/cocinada.png', price: 2.2, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 34, name: 'Mayonesa celorio', category: 'conserva', description: 'Mayonesa Celorio', image: '/images/celorio.png', price: 4.25, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },

  // Mercado
  { id: 35, name: 'Aceite 1 L', category: 'mercado', description: 'Aceite 1 L', image: '/images/aceite1l.png', price: 2.95, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 35, name: 'Aceite 1 L', category: 'mercado', description: 'Aceite 900 ml', image: '/images/aceite900ml.png', price: 2.65, availableIn: [3,4,5,6,7,8,9,10,11] },
  { id: 36, name: 'Chocolate en polvo 500 gr', category: 'mercado', description: 'Chocolate en polvo 500 gr', image: '/images/chocopolvo.png', price: 2.9, availableIn: [3,2,1] },
  { id: 37, name: 'Gelatina', category: 'mercado', description: 'Gelatina', image: '/images/gelafresa.png', price: 0.9, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 46, name: 'Café La LLave ', category: 'mercado', description: 'Café La Llave 10 oz', image: '/images/cafelallave.png', price: 6.9, availableIn: [] },
  { id: 47, name: 'Café La Carreta', category: 'mercado', description: 'Café Prensado 10 oz', image: '/images/cafelacarreta.png', price: 6.4, availableIn: [4,5,6,7,8,9,10,11] },
  { id: 48, name: 'Café Sello Rojo', category: 'mercado', description: 'Café Prensado 10 oz', image: '/images/cafesellorojo.png', price: 6.4, availableIn: [4,5,6,7,8,9,10,11] },
  { id: 49, name: 'Café Dufiltro', category: 'mercado', description: 'Café Prensado 250 gr', image: '/images/cafedufiltro.png', price: 4.5, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 51, name: 'Refresco Zuko', category: 'mercado', description: 'Caja de 8 sobres', image: '/images/zuko.png', price: 2.95, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
  { id: 52, name: 'Maíz dulce en granos', category: 'mercado', description: 'Lata de 445 gr', image: '/images/maizdulce.png', price: 1.7, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
  { id: 54, name: 'Ketchup Kurtz', category: 'mercado', description: 'Pomo de 10 OZ', image: '/images/ketchupkurtz.png', price: 2.95, availableIn: [4,5,6,7,8,9,10,11,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },

  // Aseo
  { id: 38, name: 'Papel higiénico', category: 'aseo', description: 'Papel higiénico', image: '/images/papelhigi.png', price: 2.4, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 39, name: 'Jabón  100 gr', category: 'aseo', description: 'Jabón de 100 gr', image: '/images/jabon.png', price: 0.48 , availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 56, name: 'Detergente polvo Multiuso', category: 'aseo', description: 'Bolsa de 1 Kg', image: '/images/detergente.png', price: 2.6, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },

  // Agrito
  { id: 59, name: 'Boniato', category: 'agro', description: 'Bolsa de 5 lb', image: '/images/boniato.png', price: 2.4, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 60, name: 'Malanga', category: 'agro', description: 'Bolsa de 5 lb', image: '/images/malanga.png', price: 3.5, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
  { id: 61, name: 'Ajo', category: 'agro', description: 'Bolsa de 10 cabezas Importados', image: '/images/ajo.png', price: 2.7, availableIn: [1,2,] },

  { id: 62, name: 'Whisky Old Star', category: 'liquido', description: 'Botella de 1 Lts', image: '/images/old.png', price: 7, recent: 1, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
{ id: 63, name: 'Cerveza Cristal', category: 'liquido', description: 'Caja de 24 uds', image: '/images/cristal.png', price: 24, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
{ id: 64, name: 'Cerveza Económica', category: 'liquido', description: 'Caja de 24 uds', image: '/images/timber.png', price: 20, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
{ id: 69, name: 'Malta Guajira', category: 'liquido', description: 'Botella de 330 ml', image: '/images/guajira.png', price: 0.75, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
{ id: 70, name: 'Malta Guajira', category: 'liquido', description: 'Blister de 6 uds', image: '/images/guajirablister.png', price: 4.4, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },

{ id:88 , name: 'Combo Navideño 1', category: 'combo', description: '2 Sobres de Spaguetis 500gr, 2 Mortadella Seara 500 gr, 2 Pasta de tomate 400 gr, Botella de aceite 1 Lt', image: '/images/navidad1.png', price: 11.45, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
{ id: 65, name: 'Combo 1', category: 'combo', description: '1 Lomo de cerdo importado 3 lb, 1 paquete de pollo 10 lb, 1 chuleta de lomo deshuesado 2 lb, 1 masas de cerdo 2 lb, 1 picadillo de pollo 400 g, 1 paquete de salchichas, 1 mortadela de queso, 1 yogurt de fresa probiótico 1 L, 2 leches condensadas de cajita, 2 libras de frijol negro, 10 libras de arroz blanco importado, 1 bolsa de azúcar 2 lb, 1 bolsa de sal 1 lb, 2 paquetes de espaguetis 500 g, 1 pasta de tomate 400 g, 2 botellas de aceite 1 L, 1 café Dufiltro 250 g, 4 jabones de 100 g, 1 malanga 5 lb.', image: '/images/combo1.png', price: 89.45, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
{ id: 66, name: 'Combo 2', category: 'combo', description: '1 paquete de pollo de 10 lb, 2 picadillos de pollo de 400 g, 2 paquetes de salchichas, 1 cartón de huevos (30 unidades), 1 yogurt de fresa de 1 L y 2 leches condensadas de cajita..', image: '/images/combo2.png', price: 34.45, availableIn: [,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
{ id: 67, name: 'Combo 3', category: 'combo', description: '10 lb de Arroz grano largo importado, 2 lb de frijol negro importado, 2 lb de azucar blanca importada ', image: '/images/combo3.jpg', price:17.35, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
{ id: 68, name: 'Combo 4', category: 'combo', description: 'Chuleta de lomo deshuesado 2 lb (1 unidad), Masas de cerdo 2 lb (1 unidad), Mortadela de queso 500 gr (2 unidades), Mortadela clásica 500 gr (2 unidades), Aceite 1 L (2 unidades), Gelatina  (2 unidades), Jabón 100 g (5 unidades) + 5 LB de Malanga GRATIS ', image: '/images/combo4.png', price:37.65, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
{ id: 71, name: 'Combo 5 ', category: 'combo', description: '12 maltas guajiras, 6 leche condensada', image: '/images/combo5.png', price: 22.6, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
{ id: 72, name: 'Combo 6', category: 'combo', description: '1 lomo de cerdo importado (3 lb) + 10 lb de arroz grano largo + 2 paquetes de espagueti (500 g c/u) + 1 paquete de harina de trigo (500 g) + 1 yogurt probiótico de fresa (1 L) + 1 cartón de huevos (30 u) + 2 pastas de tomate (400 g c/u) + 1 chocolate en polvo (500 g) + 2 gelatinas + 1 caja de refresco Zuko (8 sobres) + 1 café Dufiltro (250 g) + 1 paquete de papel higiénico (4 unidades) + 4 jabones (100 g c/u) + 1 bolsa de malanga (5 lb) + 1 bolsa de 10 cabezas de ajo', image: '/images/combo6.png', price: 65.99, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
{ id: 73, name: 'Combo 7 descuento 10 % ', category: 'combo', description: 'Arroz Grano Largo importado (10 lb), Frijol Negro Importado (4 lb), Azúcar Blanca Importada (4 lb), Aceite de Girasol 1 L (6 uds)', image: '/images/combo7.png', price: 30.99, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
{ id: 74, name: 'Combo 8 ', category: 'combo', description: ' Chuleta de lomo deshuesado 2 lb (1 unid), Masas de cerdo 2 lb (1 unid), Yogurt de fresa 1 L (1 unid), Arroz Grano Largo 10 , Azúcar blanca 4 lb , Frijol negro 2 lb , Spaguetis 500 gr (2 unid), Pasta de tomate 400 g (1 unid), Café Dufiltro 250 gr (1 unid), Jabón 100 g (4 unid), Malta Guajira (6 unid), Leche condensada en cajita (2 unid), Aceite 1 L (2 unid)', image: '/images/combo8.png', price: 60.99, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },


  /*{ id: 75, name: "Cajas de tv Hd", category: "electro", description: "Caja descodificadora Hd", image: "/images/cajita.png", price: 65, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] },*/
  { id: 76, name: "Olla reina Milexus ", category: "electro", description: "Olla reina de 6L Milexus", image: "/images/reina.png", price: 68, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] },
  { id: 77, name: "Olla Arrocera ", category: "electro", description: "Olla arrocera de 1,8 l Milexus", image: "/images/arrocera.png", price: 48, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] },
 /* { id: 78, name: "Freidora de aire ", category: "electro", description: "Olla freidora de aire de 4 l ", image: "/images/freidora.png", price: 100, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] }, */
 /* { id: 79, name: "Fogon de 3 quemadores ", category: "electro", description: "Fogon milexus de 3 quemadores ", image: "/images/fogon.png", price: 75, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] },*/
  { id: 80, name: "Fogon Infrarrojo  ", category: "electro", description: "Fogon Infrarrojo 1300 W  ", image: "/images/infra.png", price: 58, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] },
  { id: 81, name: "Lavadora Semiautomática Milexus 7 L  ", category: "electro", description: "Lavadora semiautomatica 7 L ", image: "/images/semi7.png", price: 210, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] },
  { id: 82, name: "Split milexus", category: "electro", description: "Milexus 1200 btu", image: "/images/split.png", price: 285, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] },
  { id: 83, name: "Frezeer", category: "electro", description: "Milexus 3.5 pies", image: "/images/freezer4p.png", price: 215, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,23, 24, 25, 26, 27] },
  { id: 84, name: "Frezeer", category: "electro", description: "Milexus 4.2 pies", image: "/images/freezer6p.png", price: 230, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] },
  { id: 85, name: "Tv de 32", category: "electro", description: "Tv inteligente 32 pulgadas", image: "/images/32.png", price: 220, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] },
  { id: 86, name: "Batidora Milexus", category: "electro", description: "Batidora 1.5 Lt vaso de cristal", image: "/images/batidora.png", price: 45, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] },
 /* { id: 87, name: "Generador Eléctrico de Gasolina", category: "electro", description: "Generador Eléctrico de Gasolina de 3000 w, salida de 220v y 110 v Voltaje 110-220V (50/60Hz), motor de 7.0 HP OHV TOTAL, sistema AVR para voltaje estable y panel de control súper fácil de usar. ⛽ Gran tanque de combustible con filtro, encendido por cuerda y breaker de seguridad para máxima protección. 🛠 Incluye interruptor automático AC y sistema de enfriamiento.", image: "/images/tota.png", price: 800, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] }*/

];

// Función para obtener producto desde URL
function getProductFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('product');
  if (productId) {
    return productData.find(p => p.id === parseInt(productId));
  }
  return null;
}

// Función para generar enlace compartible
function generateShareableLink(productId) {
  const baseUrl = window.location.origin + window.location.pathname;
  return `${baseUrl}?product=${productId}`;
}

// Hook de debounce optimizado
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Componente de imagen optimizado
const OptimizedImage = React.memo(({ src, alt, className, ...props }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 image-loading rounded" />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100 fade-in'} transition-opacity duration-300`}
        onLoad={() => setIsLoading(false)}
        onError={(e) => {
          setIsLoading(false);
          setHasError(true);
          e.target.style.display = 'none';
        }}
        loading="lazy"
        {...props}
      />
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center rounded">
          <div className="icon-package text-gray-400 text-xl"></div>
        </div>
      )}
    </div>
  );
});

// NUEVO COMPONENTE: Modal de Selección de Municipio
const MunicipalityModal = React.memo(({ isOpen, onClose, selectedMunicipality, setSelectedMunicipality }) => {
  if (!isOpen) return null;

  const handleMunicipalitySelect = (municipalityId) => {
    setSelectedMunicipality(municipalityId);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 municipality-modal-container">
      <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden animate-scale-in municipality-modal-content">
        <div className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] p-6 text-white text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <div className="icon-map-pin text-2xl"></div>
          </div>
          <h2 className="text-2xl font-bold mb-2">Selecciona tu Municipio</h2>
          <p className="text-white text-opacity-90">
            Elige tu ubicación para ver los productos disponibles en tu área
          </p>
        </div>

        <div className="p-6 max-h-96 overflow-y-auto">
          <div className="space-y-3">
            {municipalities.map(municipality => (
              <button
                key={municipality.id}
                onClick={() => handleMunicipalitySelect(municipality.id)}
                className={`w-full p-4 border-2 rounded-xl text-left transition-all flex items-center space-x-4 ${
                  selectedMunicipality === municipality.id
                    ? 'border-[var(--primary-color)] bg-green-50 ring-2 ring-[var(--primary-color)] ring-opacity-30'
                    : 'border-gray-200 hover:border-[var(--primary-color)] hover:bg-gray-50'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  selectedMunicipality === municipality.id
                    ? 'bg-[var(--primary-color)] text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  <div className="icon-map-pin text-lg"></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[var(--text-primary)] text-lg">
                    {municipality.name.split(', ')[1]}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {municipality.name.split(', ')[0]}
                  </p>
                </div>
                {selectedMunicipality === municipality.id && (
                  <div className="w-6 h-6 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                    <div className="icon-check text-xs text-white"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t p-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="icon-info text-xs text-white"></div>
              </div>
              <div>
                <p className="text-sm text-blue-800 font-medium">
                  Información importante
                </p>
                <p className="text-xs text-blue-700 mt-1">
                  Los productos disponibles y precios pueden variar según tu municipio seleccionado.
                </p>
              </div>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="w-full bg-gray-100 text-[var(--text-primary)] py-3 rounded-lg font-medium hover:bg-gray-200 transition-all"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
});

// Components
function MobileBanner() {
  return (
    <div className="mobile-banner px-4 mb-6">
      {/* Banner de oferta fin de año */}
      <div className="new-year-banner mb-4">
        <h3 className="text-lg font-bold mb-2">🎊 ¡FELIZ AÑO 2026! 🎊</h3>
        <p className="text-sm">5% DE DESCUENTO EN TODOS LOS PRODUCTOS</p>
        <p className="text-xs mt-1">Válido hasta el 15 de Enero 2026</p>
      </div>
      
      <OptimizedImage 
        src="/images/navidad.png" 
        alt="TuDespensa.25 - Ofertas Fin de Año"
        className="w-full h-full object-cover rounded-xl shadow-md new-year-modal"
      />
    </div>
  );
}

const NotificationToast = React.memo(({ message, isVisible, onClose }) => {
  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
      <div className="bg-[var(--primary-color)] text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
        <div className="icon-check-circle text-lg"></div>
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
});

const CartModal = React.memo(({ isOpen, onClose, cart, setCart, onProcessOrder }) => {
  const [customerData, setCustomerData] = React.useState({
    name: '',
    phone: '',
    beneficiaryName: '',
    beneficiaryPhone: '',
    address: '',
    notes: ''
  });
  
  const [discountCode, setDiscountCode] = React.useState('');
  const [discountApplied, setDiscountApplied] = React.useState(false);
  const [discountError, setDiscountError] = React.useState('');
  const [discountPercentage, setDiscountPercentage] = React.useState(0);

  // Códigos de descuento válidos (puedes agregar más)
  const validDiscountCodes = {
    'CLIENTEF': 5,   // 5% de descuento
    'BIENVENIDOhoy': 10, // 10% de descuento
    'PRIMERACOMPRAtd25.': 15 // 15% de descuento
  };

 const applyDiscount = () => {
  const code = discountCode.trim(); // Quita el .toUpperCase()
  
  if (!code) {
    setDiscountError('Por favor ingresa un código');
    return;
  }

  // Verifica el código exacto (case-sensitive)
  if (validDiscountCodes[code]) {
    setDiscountPercentage(validDiscountCodes[code]);
    setDiscountApplied(true);
    setDiscountError('');
  } else {
    setDiscountError('Código inválido o expirado');
    setDiscountApplied(false);
    setDiscountPercentage(0);
  }
};

  const removeDiscount = () => {
    setDiscountCode('');
    setDiscountApplied(false);
    setDiscountPercentage(0);
    setDiscountError('');
  };

  const updateQuantity = (productId, change) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === productId) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const removeItem = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const getTotalItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getSubtotalPrice = () => {
    return cart.reduce((sum, item) => sum + ((item.price * 0.95) * item.quantity), 0);
  };

  const getDiscountAmount = () => {
    const subtotal = getSubtotalPrice();
    return (subtotal * discountPercentage) / 100;
  };

  const getTotalPrice = () => {
    const subtotal = getSubtotalPrice();
    const discount = getDiscountAmount();
    return subtotal - discount;
  };

  const handleProcessOrder = () => {
    if (!customerData.name || !customerData.phone || !customerData.beneficiaryName || !customerData.beneficiaryPhone || !customerData.address) {
      alert('Por favor completa todos los campos requeridos del comprador, beneficiario y dirección');
      return;
    }
    onProcessOrder(customerData, discountCode, discountPercentage, getDiscountAmount());
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end sm:items-center sm:justify-center">
      <div className="bg-white w-full max-w-md max-h-[90vh] overflow-y-auto rounded-t-xl sm:rounded-xl">
        <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">Mi Carrito ({getTotalItems()})</h2>
          <button onClick={onClose} className="p-1">
            <div className="icon-x text-xl text-[var(--text-secondary)]"></div>
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <div className="icon-shopping-cart text-2xl text-gray-400"></div>
            </div>
            <p className="text-[var(--text-secondary)]">Tu carrito está vacío</p>
          </div>
        ) : (
          <>
            <div className="p-4 space-y-3">
              {cart.map(item => (
                <div key={item.id} className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3">
                  <OptimizedImage src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-[var(--text-secondary)]">{item.name}</h3>
                    <p className="text-xs text-[var(--text-secondary)]">{item.description}</p>
                    <p className="text-sm font-semibold text-[var(--secondary-color)]">
                      ${(item.price * 0.95).toFixed(2)} USD
                      <span className="text-xs text-green-600 ml-1">🎉 -5%</span>
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <div className="flex items-center space-x-2">
                      <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 rounded-full bg-white border flex items-center justify-center">
                        <div className="icon-minus text-sm text-[var(--text-secondary)]"></div>
                      </button>
                      <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 rounded-full bg-white border flex items-center justify-center">
                        <div className="icon-plus text-sm text-[var(--text-secondary)]"></div>
                      </button>
                    </div>
                    <p className="text-xs font-medium text-[var(--text-primary)]">
                      ${(item.price * 0.95 * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Sección de Código de Descuento */}
              <div className="border-t pt-4 mt-4">
                <div className="mb-3">
                  <h3 className="text-sm font-medium text-[var(--text-primary)] mb-2">Código de Descuento</h3>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Ingresa tu código"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      disabled={discountApplied}
                      className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] disabled:bg-gray-100"
                    />
                    {!discountApplied ? (
                      <button
                        onClick={applyDiscount}
                        className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all"
                      >
                        Aplicar
                      </button>
                    ) : (
                      <button
                        onClick={removeDiscount}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-all"
                      >
                        Quitar
                      </button>
                    )}
                  </div>
                  {discountError && (
                    <p className="text-red-500 text-xs mt-1">{discountError}</p>
                  )}
                  {discountApplied && (
                    <p className="text-green-600 text-xs mt-1">
                      ✅ Descuento del {discountPercentage}% aplicado correctamente
                    </p>
                  )}
                </div>

                {/* Resumen de Precios */}
                <div className="space-y-2 bg-gray-50 rounded-lg p-3">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>${getSubtotalPrice().toFixed(2)} USD</span>
                  </div>
                  
                  {discountApplied && (
                    <>
                      <div className="flex justify-between text-sm text-green-600">
                        <span>Descuento ({discountPercentage}%):</span>
                        <span>-${getDiscountAmount().toFixed(2)} USD</span>
                      </div>
                      <div className="border-t border-gray-200 pt-2 mt-2">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-semibold text-[var(--text-primary)]">Total:</span>
                          <span className="text-xl font-bold text-[var(--secondary-color)]">
                            ${getTotalPrice().toFixed(2)} USD
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {!discountApplied && (
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-[var(--text-primary)]">Total:</span>
                      <span className="text-xl font-bold text-[var(--secondary-color)]">
                        ${getSubtotalPrice().toFixed(2)} USD
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="border-t p-4 space-y-3">
              <h3 className="font-medium text-[var(--text-primary)]">Datos del comprador</h3>
              <input
                type="text"
                placeholder="Nombre completo del comprador *"
                value={customerData.name}
                onChange={(e) => setCustomerData({...customerData, name: e.target.value})}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              <input
                type="tel"
                placeholder="Teléfono del comprador *"
                value={customerData.phone}
                onChange={(e) => setCustomerData({...customerData, phone: e.target.value})}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              
              <h3 className="font-medium text-[var(--text-primary)] pt-4 border-t">Datos del beneficiario (quien recibe)</h3>
              <input
                type="text"
                placeholder="Nombre completo del beneficiario *"
                value={customerData.beneficiaryName}
                onChange={(e) => setCustomerData({...customerData, beneficiaryName: e.target.value})}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              <input
                type="tel"
                placeholder="Teléfono del beneficiario *"
                value={customerData.beneficiaryPhone}
                onChange={(e) => setCustomerData({...customerData, beneficiaryPhone: e.target.value})}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              
              <h3 className="font-medium text-[var(--text-primary)] pt-4 border-t">Entrega</h3>
              <textarea
                placeholder="Dirección de entrega *"
                value={customerData.address}
                onChange={(e) => setCustomerData({...customerData, address: e.target.value})}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] h-20"
              />
              <textarea
                placeholder="Notas adicionales (opcional)"
                value={customerData.notes}
                onChange={(e) => setCustomerData({...customerData, notes: e.target.value})}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] h-16"
              />
            </div>

            <div className="border-t p-4 space-y-3">
              <button
                onClick={handleProcessOrder}
                className="w-full new-year-button py-3 rounded-lg font-medium flex items-center justify-center space-x-2"
              >
                <div className="icon-gift text-lg"></div>
                <span>Procesar Pedido con Descuento</span>
              </button>
              <button
                onClick={onClose}
                className="w-full bg-gray-200 text-[var(--text-primary)] py-3 rounded-lg font-medium"
              >
                Continuar Comprando
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
});

const SocialMediaLinks = React.memo(() => {
  return (
    <div className="flex items-center justify-center space-x-4 px-4 py-3 bg-white border-b">
      <span className="text-xs text-[var(--text-secondary)]">Síguenos:</span>
      <a 
        href="https://whatsapp.com/channel/0029Vb89B2bBfxo2tGL8Fk0G" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center"
      >
        <div className="icon-message-circle text-sm text-white"></div>
      </a>
      <a 
        href="https://www.instagram.com/tudespensa.25?igsh=MWt5dzZjcWh0NnF0MA==" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center"
      >
        <div className="icon-instagram text-sm text-white"></div>
      </a>
      <a 
        href="https://www.facebook.com/share/16cchoNUTo/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center"
      >
        <div className="icon-facebook text-sm text-white"></div>
      </a>
    </div>
  );
});

const Header = React.memo(({ searchTerm, setSearchTerm, selectedMunicipality, setSelectedMunicipality, cartItems, onCartClick, onMunicipalityClick }) => {
  return (
    <header className="header-gradient text-white sticky top-0 z-50 shadow-lg">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <OptimizedImage 
              src="https://app.trickle.so/storage/public/images/usr_0b2efdb2f0000001/2fc53855-ded6-40ff-959b-7a5c6077e0e3.svg" 
              alt="TuDespensa25 Logo" 
              className="w-10 h-10 bg-white rounded-full p-2"
            />
            <h1 className="text-lg font-bold">TuDespensa25</h1>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={onMunicipalityClick}
              className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-3 py-2 hover:bg-opacity-30 transition-all"
            >
              <div className="icon-map-pin text-sm text-white"></div>
              <span className="text-sm max-w-24 truncate">
                {municipalities.find(m => m.id === selectedMunicipality)?.name.split(', ')[1] || 'Municipio'}
              </span>
              <div className="icon-chevron-down text-sm text-white"></div>
            </button>
            <button
              onClick={onCartClick}
              className="relative w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
            >
              <div className="icon-shopping-cart text-lg text-white"></div>
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[var(--secondary-color)] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {cartItems}
                </span>
              )}
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <div className="icon-search text-lg text-gray-400"></div>
          </div>
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-[var(--text-primary)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          />
        </div>
      </div>
    </header>
  );
});

const CategoryGrid = React.memo(({ selectedCategory, onCategorySelect }) => {
  return (
    <section className="px-4 py-4 sm:py-6 bg-white categories-section">
      <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3 sm:mb-4">Categorías</h2>
      <div className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-3 md:grid-cols-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`relative rounded-lg overflow-hidden flex flex-col items-center justify-center p-4 
              ${selectedCategory === category.id ? 'ring-2 ring-[var(--primary-color)]' : ''}`}
            style={{
              backgroundImage: `url(${category.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="bg-white bg-opacity-85 w-full h-full absolute inset-0"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className={`category-icon w-12 h-12 rounded-full flex items-center justify-center mb-2
                ${selectedCategory === category.id ? 'bg-[var(--primary-color)]' : 'bg-[var(--secondary-color)] bg-opacity-20'}`}>
                <div className={`${category.icon} text-xl ${selectedCategory === category.id ? 'text-white' : 'text-[var(--secondary-color)]'}`}></div>
              </div>
              <p className={`text-sm font-medium text-center 
                ${selectedCategory === category.id ? 'text-[var(--primary-color)]' : 'text-[var(--text-primary)]'}`}>
                {category.name}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
});

const FloatingWhatsAppButton = React.memo(() => {
  const handleWhatsAppClick = () => {
    const message = "¡Hola! Me interesa conocer más sobre los productos de TuDespensa.25";
    const whatsappUrl = `https://wa.me/5354066204?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 z-40 flex items-center justify-center"
    >
      <div className="icon-message-circle text-xl"></div>
    </button>
  );
});

const FloatingWishlistButton = React.memo(() => {
  const handleWishlistClick = () => {
    const message = "¡Hola! Tengo un deseo especial para mi despensa:\n\n[Describe aquí el producto que deseas que TuDespensa.25 tenga disponible]\n\n¡Gracias por considerar mis sugerencias!";
    const whatsappUrl = `https://wa.me/5354066204?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWishlistClick}
      className="fixed bottom-24 right-6 w-14 h-14 bg-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 z-40 flex items-center justify-center"
    >
      <div className="icon-heart text-xl"></div>
    </button>
  );
});

const ProductCard = React.memo(({ product, onAddToCart, likedProducts, onToggleLike, onProductClick }) => {
  const isLiked = likedProducts.includes(product.id);
  // Aplicar descuento del 5% para fin de año
  const discount = 5; // 5% de descuento
  const originalPrice = product.price;
  const discountedPrice = originalPrice * (1 - discount / 100);
  const isDiscounted = true; // Todos los productos tienen descuento

  const handleCardClick = (e) => {
    if (e.target.closest('button')) return;
    onProductClick(product);
  };

  const handleLikeClick = (e) => {
    e.stopPropagation();
    onToggleLike(product.id);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  const handleShare = (e) => {
    e.stopPropagation();
    const shareUrl = generateShareableLink(product.id);
    
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert('¡Enlace copiado! Comparte este producto con descuento de fin de año. 🎉');
    }).catch(() => {
      const tempInput = document.createElement('input');
      tempInput.value = shareUrl;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      alert('¡Enlace copiado! Comparte este producto con descuento de fin de año. 🎉');
    });
  };

  return (
    <div className={`product-card snow-effect ${isDiscounted ? 'new-year-discount' : ''}`} onClick={handleCardClick}>
      <div className="aspect-square bg-gray-100 relative overflow-hidden">
        <OptimizedImage
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        
        {/* Badge de descuento fin de año */}
        {isDiscounted && (
          <div className="new-year-badge">
            🎉 -5%
          </div>
        )}
        
        <div className="absolute top-2 right-2 flex flex-col space-y-1">
          <button onClick={handleLikeClick}>
            <div className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-sm">
              <div className={`icon-heart text-lg ${isLiked ? 'text-red-500' : 'text-gray-400'}`}></div>
            </div>
          </button>
          <button onClick={handleShare}>
            <div className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-sm">
              <div className="icon-share-2 text-lg text-gray-600"></div>
            </div>
          </button>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-medium text-[var(--text-primary)] text-sm mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs text-[var(--text-secondary)] mb-2 line-clamp-2">
          {product.description}
        </p>
        
        {/* Mostrar precio original y con descuento */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-900 rounded-full">
            {categories.find(c => c.id === product.category)?.name}
          </span>
          <div className="flex flex-col items-end">
            <span className="text-xs line-through text-gray-400">
              ${originalPrice.toFixed(2)}
            </span>
            <span className="text-sm font-bold text-[var(--secondary-color)]">
              ${discountedPrice.toFixed(2)}
              <span className="text-xs text-green-600 ml-1">🎉 -5%</span>
            </span>
          </div>
        </div>
        <button 
          onClick={handleAddToCart}
          className="w-full new-year-button py-2 px-3 rounded-lg text-sm font-medium flex items-center justify-center space-x-1 hover:bg-opacity-90 transition-all"
        >
          <div className="icon-shopping-cart text-sm"></div>
          <span>Añadir con descuento</span>
        </button>
      </div>
    </div>
  );
});

const ProductDetailModal = React.memo(({ isOpen, onClose, product, onAddToCart, likedProducts, onToggleLike }) => {
  if (!isOpen || !product) return null;

  const isLiked = likedProducts.includes(product.id);
  const categoryName = categories.find(c => c.id === product.category)?.name || 'Sin categoría';

  const handleShare = () => {
    if (product) {
      const shareUrl = generateShareableLink(product.id);
      
      // Intentar usar la Web Share API si está disponible
      if (navigator.share) {
        navigator.share({
          title: product.name,
          text: product.description,
          url: shareUrl,
        })
        .catch(console.error);
      } else {
        // Fallback: copiar al portapapeles
        navigator.clipboard.writeText(shareUrl).then(() => {
          alert('¡Enlace copiado al portapapeles! Compártelo con quien quieras.');
        }).catch(() => {
          // Fallback para navegadores más antiguos
          const tempInput = document.createElement('input');
          tempInput.value = shareUrl;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
          alert('¡Enlace copiado al portapapeles! Compártelo con quien quieras.');
        });
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end sm:items-center sm:justify-center">
      <div className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-t-xl sm:rounded-xl product-detail-modal">
        <div className="relative">
          <OptimizedImage
            src={product.image}
            alt={product.name}
            className="w-full h-auto max-h-[500px] object-contain bg-gray-50"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-sm"
          >
            <div className="icon-x text-lg text-gray-600"></div>
          </button>
          <button 
            onClick={() => onToggleLike(product.id)}
            className="absolute top-4 left-4 w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-sm"
          >
            <div className={`icon-heart text-lg ${isLiked ? 'text-red-500' : 'text-gray-400'}`}></div>
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">{product.name}</h2>
              <span className="inline-block px-3 py-1 bg-gray-100 text-[var(--text-primary)] rounded-full text-sm font-medium">
                {categoryName}
              </span>
            </div>
            <div className="text-right ml-4">
              <div className="flex flex-col items-end">
                <span className="text-sm line-through text-gray-400">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-2xl font-bold text-[var(--secondary-color)]">
                  ${(product.price * 0.95).toFixed(2)}
                </span>
                <span className="text-xs text-green-600 font-medium">
                  🎉 Descuento 5% fin de año
                </span>
              </div>
              <span className="block text-xs text-[var(--text-secondary)]">USD</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Descripción</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">{product.description}</p>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="w-full new-year-button py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all"
            >
              <div className="icon-shopping-cart text-lg"></div>
              <span>Añadir al carrito con descuento</span>
            </button>
            
            {/* NUEVO BOTÓN DE COMPARTIR */}
            <button
              onClick={handleShare}
              className="w-full bg-[var(--primary-color)] text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all"
            >
              <div className="icon-share-2 text-lg"></div>
              <span>Compartir Producto</span>
            </button>
            
            <button
              onClick={onClose}
              className="w-full bg-gray-200 text-[var(--text-primary)] py-3 rounded-lg font-medium"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

const Footer = React.memo(() => {
  return (
    <footer className="bg-[var(--text-primary)] text-white mt-12 relative overflow-hidden">
      {/* Elementos decorativos fin de año */}
      <div className="absolute top-0 left-0 right-0 text-center py-2">
        <span className="text-xs opacity-60">🎆 ✨ 🎇 🎊 🎉</span>
      </div>
      
      <div className="px-4 py-8 relative z-10">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-[#ff6b00] to-[#ffa500] rounded-full flex items-center justify-center">
              <div className="icon-fireworks text-xl text-white"></div>
            </div>
            <h3 className="text-2xl font-bold">TuDespensa.25</h3>
          </div>
          <p className="text-gray-300 text-sm mb-4">🎊 ¡Feliz Año Nuevo 2026! Tu despensa de confianza 🎊</p>
        </div>
        
        <div className="space-y-4 text-center text-sm">
          <div>
            <h4 className="font-semibold text-[#ff6b00] mb-2">Contacto</h4>
            <p className="text-gray-300">📱 +1 (914) 621-8369</p>
            <p className="text-gray-300">📧 ventas@tudespensa25.com</p>
            <p className="text-gray-300">📍 Disponible en todos los municipios de Artemisa</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#ff6b00] mb-2">Horarios</h4>
            <p className="text-gray-300">Las 24 h del día</p>
            <p className="text-gray-300">Los 7 días de la semana</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#ff6b00] mb-2">Síguenos</h4>
            <div className="flex items-center justify-center space-x-4">
              <a href="https://wa.me/5354066204" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <div className="icon-message-circle text-lg text-white"></div>
              </a>
              <a href="https://instagram.com/tudespensa25" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                <div className="icon-instagram text-lg text-white"></div>
              </a>
              <a href="https://facebook.com/tudespensa25" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="icon-facebook text-lg text-white"></div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-4 text-center">
          <p className="text-xs text-gray-400">
            🎇 ¡Próspero Año Nuevo 2026! © 2025-2026 TuDespensa.25. Todos los derechos reservados. 🎆
          </p>
        </div>
      </div>
    </footer>
  );
});

const ProductGrid = React.memo(({ products, onAddToCart, likedProducts, onToggleLike, onProductClick }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <div className="icon-search text-2xl text-gray-400"></div>
        </div>
        <p className="text-[var(--text-secondary)] text-lg">No se encontraron productos</p>
        <p className="text-[var(--text-secondary)] text-sm mt-1">Intenta con otros términos de búsqueda o selecciona otro municipio</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={onAddToCart}
          likedProducts={likedProducts}
          onToggleLike={onToggleLike}
          onProductClick={onProductClick}
        />
      ))}
    </div>
  );
});

// NUEVO COMPONENTE FAQ
const FAQSection = React.memo(() => {
  const [openItems, setOpenItems] = React.useState([]);

  const toggleItem = (index) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "💳 **Solo Zelle** para clientes desde el exterior. El pago se verifica al instante, sin impuestos adicionales. Pagas seguro y al momento, desde donde estés."
    },
    {
      question: "¿Cuál es el tiempo de entrega?",
      answer: "🚚 **Entregas en menos de 48 horas**, y la mayoría de los pedidos llegan el mismo día. Esto aplica en toda la provincia Artemisa. Es como si un vecino llevara la compra a tu casa."
    },
    {
      question: "¿Cuánto cuesta el envío?",
      answer: `📦 **Tarifa de Envíos:**\n\n✅ **Municipios Gratis** (a partir de 30 USD, menos → 1.99 USD):\n• San Cristóbal\n• Candelaria\n• Guanajay\n\n✅ **Envío 3.99 USD fijo:**\n• Artemisa (cabecera)\n• Caimito\n• Mariel\n\n✅ **Envío 5 USD fijo:**\n• Bauta\n• Güira de Melena\n• San Antonio de los Baños\n• Bahía Honda\n• Alquízar`
    },
    {
      question: "¿En qué municipios realizan entregas?",
      answer: "📍 Cubrimos **toda la provincia Artemisa**: San Cristóbal, Candelaria, Mariel, Guanajay, Caimito, Bauta, Artemisa, Alquízar, Güira de Melena, San Antonio de los Baños y Bahía Honda."
    },
    {
      question: "¿Qué categorías de productos ofrecen?",
      answer: `🛍️ **Nuestras Categorías:**\n\n🥫 **Alimentos:** arroz, granos, carnes, lácteos, dulces, conservas\n🧼 **Productos de Aseo y Limpieza:** detergentes, jabones, higiene personal\n⚡ **Electrodomésticos:** lavadoras, batidoras, fogones, freezers\n🎁 **Combos especiales** con descuentos exclusivos`
    },
    {
      question: "¿Tienen promociones especiales?",
      answer: "🎯 **Promociones Activas:**\n\n🔥 **Combos Especiales:** 3 días a la semana mostramos combos con descuentos\n💥 **Zona Roja:** Productos con descuentos mayores para aprovechar\n📦 **Envío Gratis:** En municipios seleccionados a partir de 30 USD\n🎁 **Ofertas de Temporada:** Siempre tenemos promociones vigentes"
    },
    {
      question: "¿Puedo hacer pedidos personalizados?",
      answer: "✅ **¡Sí!** Ofrecemos la posibilidad de crear pedidos personalizados y combos especiales según tus necesidades. Contáctanos por WhatsApp para coordinar tu pedido a medida."
    },
    {
      question: "¿Qué hago si un producto no está disponible?",
      answer: "🔄 Si un producto no está disponible, te contactaremos inmediatamente para ofrecerte alternativas similares de igual o mejor calidad, o programar la entrega una vez que tengamos stock."
    },
    {
      question: "¿Proveen comprobante de compra?",
      answer: "🧾 **Sí, absolutamente.** Proveemos comprobante de venta por todos nuestros pedidos. Solo debes solicitarlo al momento de hacer tu pedido y te lo entregaremos con tu compra."
    },
    {
      question: "¿Qué es TuDespensa.25?",
      answer: "🏪 **TuDespensa.25** es tu tienda online de confianza en Artemisa, especializada en la venta y distribución de productos de primera necesidad con entrega a domicilio rápida y precios competitivos."
    }
  ];

  return (
    <section id="faq" className="px-4 py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Header Mejorado */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full flex items-center justify-center shadow-lg">
              <div className="icon-help-circle text-2xl text-white"></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[var(--text-primary)]">Preguntas Frecuentes</h2>
              <p className="text-[var(--text-secondary)] mt-1">Todo lo que necesitas saber sobre TuDespensa.25</p>
            </div>
          </div>
        </div>

        {/* Grid de FAQ Mejorado */}
        <div className="grid gap-4 md:grid-cols-2">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md bg-white"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors group"
              >
                <span className="font-semibold text-[var(--text-primary)] text-sm sm:text-base pr-4 group-hover:text-[var(--primary-color)] transition-colors">
                  {item.question}
                </span>
                <div className={`transform transition-transform duration-300 flex-shrink-0 ${
                  openItems.includes(index) ? 'rotate-180' : ''
                }`}>
                  <div className="icon-chevron-down text-[var(--primary-color)] text-lg"></div>
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 py-5 bg-gradient-to-r from-gray-50 to-white border-t border-gray-100 animate-fade-in">
                  <div className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Mejorado */}
        <div className="mt-12 text-center bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-2xl p-8 text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-3">¿No encontraste tu respuesta?</h3>
          <p className="text-white text-opacity-90 mb-6 text-lg">
            Estamos aquí para ayudarte personalmente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5354066204"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[var(--primary-color)] px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-3 hover:scale-105 transition-transform shadow-lg"
            >
              <div className="icon-message-circle text-xl"></div>
              <span className="text-lg">WhatsApp Directo</span>
            </a>
            <a 
              href="tel:+5354066204"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-3 hover:bg-white hover:text-[var(--primary-color)] transition-all"
            >
              <div className="icon-phone text-xl"></div>
              <span className="text-lg">Llamar Ahora</span>
            </a>
          </div>
          <p className="text-white text-opacity-80 mt-4 text-sm">
            Horario de atención: 24/7 • Respuesta inmediata
          </p>
        </div>

        {/* Información Adicional */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="icon-truck text-2xl text-[var(--primary-color)] mb-2"></div>
            <h4 className="font-semibold text-[var(--text-primary)]">Entrega Rápida</h4>
            <p className="text-sm text-[var(--text-secondary)]">Menos de 48 horas</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="icon-shield text-2xl text-[var(--primary-color)] mb-2"></div>
            <h4 className="font-semibold text-[var(--text-primary)]">Pago Seguro</h4>
            <p className="text-sm text-[var(--text-secondary)]">Verificación instantánea</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="icon-star text-2xl text-[var(--primary-color)] mb-2"></div>
            <h4 className="font-semibold text-[var(--text-primary)]">Calidad Garantizada</h4>
            <p className="text-sm text-[var(--text-secondary)]">Productos frescos</p>
          </div>
        </div>
      </div>
    </section>
  );
});

// Error Boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Algo salió mal</h1>
            <p className="text-gray-600 mb-4">Lo sentimos, ocurrió un error inesperado.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-[var(--primary-color)] text-white rounded-lg"
            >
              Recargar Página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Main App
function App() {
  const [selectedCategory, setSelectedCategory] = React.useState('todos');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedMunicipality, setSelectedMunicipality] = React.useState(1);
  const [cart, setCart] = React.useState([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [likedProducts, setLikedProducts] = React.useState([]);
  const [notification, setNotification] = React.useState({ message: '', isVisible: false });
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  
  // NUEVO ESTADO: Modal de municipio
  const [showMunicipalityModal, setShowMunicipalityModal] = React.useState(true); // Cambiado a true para que aparezca al inicio

  // Debounce para búsqueda
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Agregar este useEffect para manejar productos desde URL
  React.useEffect(() => {
    const productFromURL = getProductFromURL();
    if (productFromURL) {
      setSelectedProduct(productFromURL);
      // También podemos navegar a la categoría del producto
      setSelectedCategory(productFromURL.category);
    }
  }, []);

  // Filtrado optimizado de productos
  const filteredProducts = React.useMemo(() => {
    if (!selectedMunicipality) return [];
    
    let filtered = productData;
    
    // Filtrar por municipio primero (más restrictivo)
    filtered = filtered.filter(product => 
      product.availableIn.includes(selectedMunicipality)
    );
    
    // Luego por categoría
    if (selectedCategory !== 'todos') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Finalmente por búsqueda
    if (debouncedSearchTerm.trim()) {
      const term = debouncedSearchTerm.toLowerCase().trim();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term)
      );
    }
    
    return filtered;
  }, [selectedCategory, debouncedSearchTerm, selectedMunicipality]);

  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    
    setNotification({
      message: `${product.name} ha sido añadido con 5% de descuento fin de año 🎉`,
      isVisible: true
    });
  };

  const handleToggleLike = (productId) => {
    setLikedProducts(prevLiked => {
      if (prevLiked.includes(productId)) {
        return prevLiked.filter(id => id !== productId);
      }
      return [...prevLiked, productId];
    });
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);
  };

  const handleProcessOrder = (customerData, discountCode = '', discountPercentage = 0, discountAmount = 0) => {
    const selectedMunicipalityName = municipalities.find(m => m.id === selectedMunicipality)?.name || '';
    
    let orderMessage = `*🎊 ¡FELIZ AÑO NUEVO 2026! 🎊*\n\n`;
    orderMessage += `*OFERTA ESPECIAL  - 5% DE DESCUENTO EN TODOS LOS PRODUCTOS*\n\n`;
    orderMessage += `*DATOS DEL COMPRADOR:*\n`;
    orderMessage += `👤 Nombre: ${customerData.name}\n`;
    orderMessage += `📱 Teléfono: ${customerData.phone}\n\n`;
    
    orderMessage += `*DATOS DEL BENEFICIARIO (QUIEN RECIBE):*\n`;
    orderMessage += `👤 Nombre: ${customerData.beneficiaryName}\n`;
    orderMessage += `📱 Teléfono: ${customerData.beneficiaryPhone}\n\n`;
    
    orderMessage += `*DATOS DE ENTREGA:*\n`;
    orderMessage += `📍 Dirección: ${customerData.address}\n`;
    orderMessage += `🏘️ Municipio: ${selectedMunicipalityName}\n`;
    if (customerData.notes) {
      orderMessage += `📝 Notas: ${customerData.notes}\n`;
    }
    
    // Información de descuento especial fin de año
    orderMessage += `\n*🎉 DESCUENTO ESPECIAL :*\n`;
    orderMessage += `📅 Válido hasta: 15 de Enero 2026\n`;
    orderMessage += `📉 Descuento aplicado: 5% en todos los productos\n\n`;
    
    // Descuento adicional por código si aplica
    if (discountCode && discountPercentage > 0) {
      orderMessage += `*🎫 DESCUENTO ADICIONAL POR CÓDIGO:*\n`;
      orderMessage += `Código: ${discountCode}\n`;
      orderMessage += `Descuento adicional: ${discountPercentage}%\n`;
      orderMessage += `💵 Ahorro adicional: $${discountAmount.toFixed(2)} USD\n\n`;
    }
    
    orderMessage += `\n*PRODUCTOS SOLICITADOS:*\n`;
    let subtotal = 0;
    let totalDiscount = 0;
    
    cart.forEach((item, index) => {
      const originalPrice = item.price;
      const discountedPrice = originalPrice * 0.95; // 5% descuento
      const itemSubtotal = discountedPrice * item.quantity;
      const itemDiscount = (originalPrice - discountedPrice) * item.quantity;
      
      subtotal += itemSubtotal;
      totalDiscount += itemDiscount;
      
      orderMessage += `${index + 1}. ${item.name}\n`;
      orderMessage += `   💰 Precio original: $${originalPrice.toFixed(2)} USD\n`;
      orderMessage += `   💰 Precio con descuento: $${discountedPrice.toFixed(2)} USD\n`;
      orderMessage += `   📦 Cantidad: ${item.quantity}\n`;
      orderMessage += `   💵 Subtotal: $${itemSubtotal.toFixed(2)} USD\n`;
      orderMessage += `   🎉 Ahorro: $${itemDiscount.toFixed(2)} USD\n\n`;
    });
    
    // Resumen de precios con mensaje conmemorativo
    orderMessage += `*🎊 RESUMEN DE PAGO - OFERTA  DE AÑO NUEVO 🎊*\n`;
    orderMessage += `🛒 Subtotal sin descuento: $${(subtotal / 0.95).toFixed(2)} USD\n`;
    orderMessage += `🎉 Descuento  (5%): -$${totalDiscount.toFixed(2)} USD\n`;
    
    if (discountPercentage > 0) {
      orderMessage += `🎫 Descuento adicional (${discountPercentage}%): -$${discountAmount.toFixed(2)} USD\n`;
    }
    
    const finalTotal = discountPercentage > 0 ? subtotal - discountAmount : subtotal;
    orderMessage += `💰 *TOTAL FINAL CON DESCUENTO: $${finalTotal.toFixed(2)} USD*\n\n`;
    
    orderMessage += `*¡FELICIDADES! HAS AHORRADO: $${(totalDiscount + discountAmount).toFixed(2)} USD*\n\n`;
    
    orderMessage += `*🎆 MENSAJE CONMEMORATIVO:*\n`;
    orderMessage += `¡Gracias por confiar en TuDespensa.25 !\n`;
    orderMessage += `Te deseamos un próspero Año Nuevo 2026 lleno de bendiciones,\n`;
    orderMessage += `salud, prosperidad y éxitos. ¡Que el 2026 traiga abundancia\n`;
    orderMessage += `y felicidad a tu hogar! 🎇\n\n`;
    
    orderMessage += `*DATOS DEL VENDEDOR:*\n`;
    orderMessage += `🏪 Tienda: TuDespensa.25\n`;
    orderMessage += `📞 Contacto: +5354066204\n`;
    orderMessage += `📧 Email: ventas@tudespensa25.com\n`;
    
    orderMessage += `\n*DATOS DE ENTREGA:*\n`;
    orderMessage += `🚚 Entrega a domicilio \n`;
    orderMessage += `⏰ Tiempo estimado: 24 a 48 horas\n`;
    orderMessage += `💳 Pago:Transferencia Zelle\n`;
    orderMessage += `\n🎆 ¡FELIZ 2026! 🎆`;

    const whatsappUrl = `https://wa.me/5354066204?text=${encodeURIComponent(orderMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    setCart([]);
    setIsCartOpen(false);
  };

  const getTotalCartItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        selectedMunicipality={selectedMunicipality}
        setSelectedMunicipality={setSelectedMunicipality}
        cartItems={getTotalCartItems()}
        onCartClick={() => setIsCartOpen(true)}
        onMunicipalityClick={() => setShowMunicipalityModal(true)} // NUEVA PROPS
      />
      
      {/* Banner superior de fin de año */}
      <div className="christmas-top-banner">
        <div className="flex items-center justify-center space-x-4 text-sm">
          <span className="twinkle">🎆</span>
          <span className="font-medium">¡OFERTA FIN DE AÑO! 5% de descuento en todos los productos</span>
          <span className="twinkle">🎇</span>
        </div>
      </div>
      
      <SocialMediaLinks />
      
      {/* Banner para móvil */}
      <MobileBanner />
      
      <main className="pb-20">
        <CategoryGrid 
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
        <div className="px-4 mt-6 products-section">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
            {selectedCategory === 'todos' ? 'Todos los Productos' : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          <ProductGrid 
            products={filteredProducts} 
            onAddToCart={handleAddToCart}
            likedProducts={likedProducts}
            onToggleLike={handleToggleLike}
            onProductClick={handleProductClick}
          />
        </div>

        {/* SECCIÓN FAQ */}
        <FAQSection />
      </main>
      
      <Footer />
      <FloatingWhatsAppButton />
      <FloatingWishlistButton />
      
      <NotificationToast
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={() => setNotification({ message: '', isVisible: false })}
      />
      
      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        setCart={setCart}
        onProcessOrder={(customerData, discountCode, discountPercentage, discountAmount) => 
          handleProcessOrder(customerData, discountCode, discountPercentage, discountAmount)
        }
      />
      
      <ProductDetailModal
        isOpen={!!selectedProduct}
        onClose={handleCloseProductModal}
        product={selectedProduct}
        onAddToCart={handleAddToCart}
        likedProducts={likedProducts}
        onToggleLike={handleToggleLike}
      />
      
      {/* NUEVO MODAL DE MUNICIPIO - REEMPLAZA AL DE OFERTAS ESPECIALES */}
      <MunicipalityModal
        isOpen={showMunicipalityModal}
        onClose={() => setShowMunicipalityModal(false)}
        selectedMunicipality={selectedMunicipality}
        setSelectedMunicipality={setSelectedMunicipality}
      />
    </div>
  );
}

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);