// js/data/products.js
// ============================================
// PRODUCTOS - DATOS ORIGINALES COMPLETOS
// ============================================

const productData = [
  // Cárnicos y embutidos
  { id: 40, name: 'Pollo caja de 33 lb de postas', category: 'carnicos', description: 'Caja de 33 lb de pollo', image: '/images/pollo_caja33.png', price: 38, availableIn: [1,2] },
  { id: 42, name: 'Lomo de Cerdo Importado ', category: 'carnicos', description: 'Porción de 3 Lb', image: '/images/lomo.png', price: 11.2, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 2, name: 'Pollo paquete de 10 lb', category: 'carnicos', description: 'Paquete de 10 lb de pollo', image: '/images/pollo10lb.png', price: 11.4, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 88, name: 'Pollo paquete de 11 lb', category: 'carnicos', description: 'Paquete de 11 lb de pollo', image: '/images/pollo10lb.png', price: 13.2, availableIn: [1, 2 ] },
  { id: 3, name: 'Pechuga paquete de 2 kg', category: 'carnicos', description: 'Pechuga de pollo 2 kg', image: '/images/pechuga2kg.png', price: 14, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 5, name: 'Chuleta de lomo deshuesado 2 lb', category: 'carnicos', description: 'Chuleta de lomo deshuesado', image: '/images/chuletalomo.png', price: 8.5, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 6, name: 'Masas de cerdo 2 lb', category: 'carnicos', description: 'Masas de cerdo 2 lb', image: '/images/masas.png', price: 8, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 7, name: 'Bistec de cerdo 2 lb', category: 'carnicos', description: 'Bistec de cerdo 2 lb', image: '/images/bisteclomo.png', price: 9, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 10, name: 'Picadillo 400 gr de pollo', category: 'carnicos', description: 'Picadillo de pollo 400 gr', image: '/images/picadillo.png', price: 1.85, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 11, name: 'Hamburguesas mixtas de pollo y cerdo', category: 'carnicos', description: 'Hamburguesas mixtas de pollo y cerdo', image: '/images/hamburguesas.png', price: 2.3, availableIn: [4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 12, name: 'Mortadella Seara de Pollo ', category: 'carnicos', description: 'Mortadella de 500 gr', image: '/images/seara500.png', price: 2.3, availableIn: [1, 2, 3] },
  { id: 13, name: 'Mortadella clásica', category: 'carnicos', description: 'Mortadella clásica', image: '/images/mortclasica.png', price:2.3, availableIn: [1, 2 ] },
  { id: 14, name: 'Mortadela de queso', category: 'carnicos', description: 'Mortadella de queso', image: '/images/mortqueso.png', price: 2.3, availableIn: [1, 2] },
  { id: 15, name: 'Mortadela de aceituna', category: 'carnicos', description: 'Mortadella con aceituna', image: '/images/mortaceit.png', price: 2.3, availableIn: [4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 45, name: 'Carne de Res troceada', category: 'carnicos', description: 'Bolsa de 1 Kg', image: '/images/restroceada.png', price: 14.4, availableIn: [4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 17, name: 'Hígado de pollo 1 kg', category: 'carnicos', description: 'Hígado de pollo 1 kg', image: '/images/higado.png', price: 2.60, availableIn: [4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 18, name: 'Salchichas', category: 'carnicos', description: 'Salchichas', image: '/images/salchichas.png', price:1.75, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },

  // Lácteos y Huevos
  { id: 20, name: 'Cartón de huevos', category: 'lacteos', description: 'Cartón de huevos frescos', image: '/images/huevo30.png', price: 8.5, availableIn: [4,5,6,7,8,9,10,11] },
  { id: 22, name: 'Leche condensada de cajita', category: 'lacteos', description: 'Leche condensada de cajita', image: '/images/cajitaleche.png', price: 1.65, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 23, name: 'Leche condensada lata', category: 'lacteos', description: 'Leche condensada lata', image: '/images/nezkaleche.png', price: 1.8, availableIn: [] },
  { id: 55, name: 'Helado', category: 'lacteos', description: 'Cubeta de 3L', image: '/images/helado.png', price: 9, availableIn: [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
  { id: 57, name: 'Leche en Polvo', category: 'lacteos', description: 'Bolsa de 1 kg', image: '/images/lechepolvomu.png', price: 8.5, availableIn: [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
  { id: 58, name: 'Cartón de huevos', category: 'lacteos', description: '30 uds frescos 100% orgánicos', image: '/images/huevo30.png', price: 9.4, availableIn: [1,2,3,19,20,21,22,23,24,25,26,27] },

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
  { id: 61, name: 'Ajo', category: 'agro', description: 'Bolsa de 10 cabezas Importados', image: '/images/ajo.png', price: 2.7, availableIn: [1,2] },

  // Líquidos
  { id: 62, name: 'Whisky Old Star', category: 'liquido', description: 'Botella de 1 Lts', image: '/images/old.png', price: 7, recent: 1, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
  { id: 63, name: 'Cerveza Cristal', category: 'liquido', description: 'Caja de 24 uds', image: '/images/cristal.png', price: 24, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
  { id: 64, name: 'Cerveza Económica', category: 'liquido', description: 'Caja de 24 uds', image: '/images/timber.png', price: 20, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
  { id: 69, name: 'Malta Guajira', category: 'liquido', description: 'Botella de 330 ml', image: '/images/guajira.png', price: 0.75, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
  { id: 70, name: 'Malta Guajira Blister', category: 'liquido', description: 'Blister de 6 uds', image: '/images/guajirablister.png', price: 4.4, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },

  // COMBOS
  { id: 89, name: 'Combo 9', category: 'combo', description: '2 Sobres de Spaguetis 500gr, 2 Mortadella Seara 500 gr, 2 Pasta de tomate 400 gr, Botella de aceite 1 Lt', image: '/images/combo9.png', price: 11.45, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
  { id: 65, name: 'Combo 1', category: 'combo', description: '1 Lomo de cerdo importado 3 lb, 1 paquete de pollo 10 lb, 1 chuleta de lomo deshuesado 2 lb, 1 masas de cerdo 2 lb, 1 picadillo de pollo 400 g, 1 paquete de salchichas, 1 mortadela de queso, 1 yogurt de fresa probiótico 1 L, 2 leches condensadas de cajita, 2 libras de frijol negro, 10 libras de arroz blanco importado, 1 bolsa de azúcar 2 lb, 1 bolsa de sal 1 lb, 2 paquetes de espaguetis 500 g, 1 pasta de tomate 400 g, 2 botellas de aceite 1 L, 1 café Dufiltro 250 g, 4 jabones de 100 g, 1 malanga 5 lb.', image: '/images/combo1.png', price: 89.45, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
  { id: 66, name: 'Combo 2', category: 'combo', description: '1 paquete de pollo de 10 lb, 2 picadillos de pollo de 400 g, 2 paquetes de salchichas, 1 cartón de huevos (30 unidades), 1 yogurt de fresa de 1 L y 2 leches condensadas de cajita..', image: '/images/combo2.png', price: 34.45, availableIn: [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
  { id: 67, name: 'Combo 3', category: 'combo', description: '10 lb de Arroz grano largo importado, 2 lb de frijol negro importado, 2 lb de azucar blanca importada ', image: '/images/combo3.jpg', price:17.35, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
  { id: 68, name: 'Combo 4', category: 'combo', description: 'Chuleta de lomo deshuesado 2 lb (1 unidad), Masas de cerdo 2 lb (1 unidad), Mortadela de queso 500 gr (2 unidades), Mortadela clásica 500 gr (2 unidades), Aceite 1 L (2 unidades), Gelatina  (2 unidades), Jabón 100 g (5 unidades) + 5 LB de Malanga GRATIS ', image: '/images/combo4.png', price:37.65, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
  { id: 71, name: 'Combo 5 ', category: 'combo', description: '12 maltas guajiras, 6 leche condensada', image: '/images/combo5.png', price: 22.6, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
  { id: 72, name: 'Combo 6', category: 'combo', description: '1 lomo de cerdo importado (3 lb) + 10 lb de arroz grano largo + 2 paquetes de espagueti (500 g c/u) + 1 paquete de harina de trigo (500 g) + 1 yogurt probiótico de fresa (1 L) + 1 cartón de huevos (30 u) + 2 pastas de tomate (400 g c/u) + 1 chocolate en polvo (500 g) + 2 gelatinas + 1 caja de refresco Zuko (8 sobres) + 1 café Dufiltro (250 g) + 1 paquete de papel higiénico (4 unidades) + 4 jabones (100 g c/u) + 1 bolsa de malanga (5 lb) + 1 bolsa de 10 cabezas de ajo', image: '/images/combo6.png', price: 65.99, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
  { id: 73, name: 'Combo 7 ', category: 'combo', description: 'Arroz Grano Largo importado (10 lb), Frijol Negro Importado (4 lb), Azúcar Blanca Importada (4 lb), Aceite de Girasol 1 L (6 uds)', image: '/images/combo7.png', price: 30.99, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
  { id: 74, name: 'Combo 8 ', category: 'combo', description: ' Chuleta de lomo deshuesado 2 lb (1 unid), Masas de cerdo 2 lb (1 unid), Yogurt de fresa 1 L (1 unid), Arroz Grano Largo 10 , Azúcar blanca 4 lb , Frijol negro 2 lb , Spaguetis 500 gr (2 unid), Pasta de tomate 400 g (1 unid), Café Dufiltro 250 gr (1 unid), Jabón 100 g (4 unid), Malta Guajira (6 unid), Leche condensada en cajita (2 unid), Aceite 1 L (2 unid)', image: '/images/combo8.png', price: 60.99, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },

  // Electrodomésticos
  { id: 76, name: "Olla reina Milexus ", category: "electro", description: "Olla reina de 6L Milexus", image: "/images/reina.png", price: 68, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] },
  { id: 77, name: "Olla Arrocera ", category: "electro", description: "Olla arrocera de 1,8 l Milexus", image: "/images/arrocera.png", price: 48, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] },
  { id: 80, name: "Fogon Infrarrojo  ", category: "electro", description: "Fogon Infrarrojo 1300 W  ", image: "/images/infra.png", price: 58, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] },
  { id: 81, name: "Lavadora Semiautomática Milexus 7 L  ", category: "electro", description: "Lavadora semiautomatica 7 L ", image: "/images/semi7.png", price: 210, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] },
  { id: 82, name: "Split milexus", category: "electro", description: "Milexus 1200 btu", image: "/images/split.png", price: 285, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] },
  { id: 83, name: "Frezeer 3.5 pies", category: "electro", description: "Milexus 3.5 pies", image: "/images/freezer4p.png", price: 215, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,23, 24, 25, 26, 27] },
  { id: 84, name: "Frezeer 4.2 pies", category: "electro", description: "Milexus 4.2 pies", image: "/images/freezer6p.png", price: 230, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] },
  { id: 85, name: "Tv de 32", category: "electro", description: "Tv inteligente 32 pulgadas", image: "/images/32.png", price: 220, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] },
  { id: 86, name: "Batidora Milexus", category: "electro", description: "Batidora 1.5 Lt vaso de cristal", image: "/images/batidora.png", price: 45, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27] },
];