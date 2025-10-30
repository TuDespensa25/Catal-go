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
  { id: 'carnicos', name: 'Cárnicos y embutidos', icon: 'icon-beef', backgroundImage: '/images/carnicos.png' },
  { id: 'cereales', name: 'Cereales, pastas y granos', icon: 'icon-wheat', backgroundImage: '/images/cereales.png' },
  { id: 'lacteos', name: 'Lácteos y huevos', icon: 'icon-milk', backgroundImage: '/images/lacteos.png' },
  { id: 'conserva', name: 'Conserva y enlatados', icon: 'icon-can', backgroundImage: '/images/conserva.png' },
  { id: 'mercado', name: 'Mercado', icon: 'icon-basket', backgroundImage: '/images/mercado.png' },
  { id: 'aseo', name: 'Aseo', icon: 'icon-broom', backgroundImage: '/images/aseo.png' },
  { id: 'agro', name: 'Agrito', icon: 'icon-basket', backgroundImage: '/images/aseo.png' },
  { id: 'liquido', name: 'Líquidos', icon: 'icon-basket', backgroundImage: '/images/aseo.png' },
  { id: 'combo', name: 'Combos', icon: 'icon-basket', backgroundImage: '/images/aseo.png' }
];

const productData = [
  // Cárnicos y embutidos
  { id: 1, name: 'Pollo caja de 40 lb 4 paquetes de 10 lb', category: 'carnicos', description: 'Caja de 40 lb de pollo', image: '/images/pollo_caja.png', price: 43, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 40, name: 'Pollo caja de 33 lb de postas', category: 'carnicos', description: 'Caja de 33 lb de pollo', image: '/images/pollo_caja33.png', price: 38, availableIn: [] },
  { id: 42, name: 'Lomo de Cerdo Importado ', category: 'carnicos', description: 'Porción de 3 Lb', image: '/images/lomo.png', price: 10.4, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 2, name: 'Pollo paquete de 10 lb', category: 'carnicos', description: 'Paquete de 10 lb de pollo', image: '/images/pollo10lb.png', price: 11.2, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 3, name: 'Pechuga paquete de 2 kg', category: 'carnicos', description: 'Pechuga de pollo 2 kg', image: '/images/pechuga2kg.png', price: 14, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 4, name: 'Bandeja de 2 lb de bistec pechuga', category: 'carnicos', description: 'Bistec de pechuga 2 lb', image: '/images/bistecpechuga.png', price: 8.5, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 41, name: 'Caja de pollo de 40 Lb Postas', category: 'carnicos', description: 'Caja de 40 lb de pollo', image: '/images/pollo_caja40agranel.png', price: 42, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 5, name: 'Chuleta de lomo deshuesado 2 lb', category: 'carnicos', description: 'Chuleta de lomo deshuesado', image: '/images/chuletalomo.png', price: 7.5, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 6, name: 'Masas de cerdo 2 lb', category: 'carnicos', description: 'Masas de cerdo 2 lb', image: '/images/masas.png', price: 7.5, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 7, name: 'Bistec de cerdo 2 lb', category: 'carnicos', description: 'Bistec de cerdo 2 lb', image: '/images/bisteclomo.png', price: 8, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 8, name: 'Lomo ahumado 2 lb lasqueado', category: 'carnicos', description: 'Lomo ahumado lasqueado', image: '/images/ahumadolasqueado.png', price: 4.6, availableIn: [4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 9, name: 'Lomo ahumado importado 2 lb', category: 'carnicos', description: 'Lomo ahumado deshuesado 1 lb', image: '/images/ahumado.png', price: 4.6, availableIn: [4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 10, name: 'Picadillo 400 gr de pollo', category: 'carnicos', description: 'Picadillo de pollo 400 gr', image: '/images/picadillo.png', price: 1.75, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 11, name: 'Hamburguesas mixtas de pollo y cerdo', category: 'carnicos', description: 'Hamburguesas mixtas de pollo y cerdo', image: '/images/hamburguesas.png', price: 2.2, availableIn: [4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 12, name: 'Mortadella Seara de Pollo ', category: 'carnicos', description: 'Mortadella de 500 gr', image: '/images/seara500.png', price: 2.2, availableIn: [1, 2, 3] },
  { id: 13, name: 'Mortadella clásica', category: 'carnicos', description: 'Mortadella clásica', image: '/images/mortclasica.png', price:2.2, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 14, name: 'Mortadela de queso', category: 'carnicos', description: 'Mortadella de queso', image: '/images/mortqueso.png', price: 2.2, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 15, name: 'Mortadela de aceituna', category: 'carnicos', description: 'Mortadella con aceituna', image: '/images/mortaceit.png', price: 2.2, availableIn: [4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 45, name: 'Carne de Res troceada', category: 'carnicos', description: 'Bolsa de 1 Kg', image: '/images/restroceada.png', price: 14.4, availableIn: [4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 17, name: 'Hígado de pollo 1 kg', category: 'carnicos', description: 'Hígado de pollo 1 kg', image: '/images/higado.png', price: 2.40, availableIn: [4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 18, name: 'Salchichas', category: 'carnicos', description: 'Salchichas', image: '/images/salchichas.png', price:1.5, availableIn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 50, name: 'Muslo de pollo ahumado', category: 'carnicos', description: 'Bolsa de 3 Lb', image: '/images/polloahumado.png', price: 7, availableIn: [] },

  // Lácteos y Huevos
  { id: 19, name: 'Leche entera 1 kg', category: 'lacteos', description: 'Leche entera 1 kg', image: '/images/leche1kg.png', price: 10, availableIn: [1,2,3] },
  { id: 20, name: 'Cartón de huevos', category: 'lacteos', description: 'Cartón de huevos frescos', image: '/images/huevo30.png', price: 7.5, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 21, name: 'Yogurt de fresa 1 L', category: 'lacteos', description: 'Yogurt de fresa 1 L', image: '/images/yogurt1L.png', price: 3.2, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 22, name: 'Leche condensada de cajita', category: 'lacteos', description: 'Leche condensada de cajita', image: '/images/cajitaleche.png', price: 1.45, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 23, name: 'Leche condensada lata', category: 'lacteos', description: 'Leche condensada lata', image: '/images/nezkaleche.png', price: 1.6, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 55, name: 'Helado', category: 'lacteos', description: 'Caja de 4L', image: '/images/helado.png', price: 9, availableIn: [,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
  { id: 57, name: 'Leche en Polvo', category: 'lacteos', description: 'Bolsa de 1 kg', image: '/images/lechepolvomu.png', price: 8.5, availableIn: [,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
  { id: 58, name: 'Cartón de huevos', category: 'lacteos', description: '30 uds frescos 100% orgánicos', image: '/images/huevo30.png', price: 9.4, availableIn: [1,2,3,,19,20,21,22,23,24,25,26,27] },

  // Cereales, Pastas y Granos
  { id: 24, name: 'Frijol negro 1 lb', category: 'cereales', description: 'Frijol negro 1 lb', image: '/images/frijol2lb.png', price: 1.2, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 25, name: 'Arroz Grano Largo', category: 'cereales', description: 'Arroz bolsa 2 lb', image: '/images/arroz2lb.png', price: 1.85, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 26, name: 'Sal 1 lb', category: 'cereales', description: 'Sal 1 lb', image: '/images/sal.png', price: 0.5, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 27, name: 'Azúcar 2 lb', category: 'cereales', description: 'Azúcar 2 lb', image: '/images/azucar2lb.png', price: 1.85, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 28, name: 'Spaguetis', category: 'cereales', description: 'Spaguetis', image: '/images/spaguetis.png', price:1.2, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 29, name: 'Arroz Grano Largo 25 kg (55 lb)', category: 'cereales', description: 'Saco de arroz  25 kg (55 lb)', image: '/images/arroz25kgsur.png', price: 45, availableIn: [1,3,2] },
  { id: 44, name: 'Arroz Grano Largo 25 kg (55 lb)', category: 'cereales', description: 'Saco de arroz  25 kg (55 lb)', image: '/images/Arroz55lbguy.png', price: 45, availableIn: [4,5,6,7,8,9,10,11] },
  { id: 30, name: 'Harina de trigo 1 kg', category: 'cereales', description: 'Harina de trigo 1 kg', image: '/images/harinafresko.png', price: 2.2, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 53, name: 'Frijoles Blanco Del Campo ', category: 'cereales', description: 'Bolsa de 16 OZ', image: '/images/alubiasdelcampo.png', price: 2.4, availableIn: [4,5,6,7,8,9,10,11,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },

  // Conserva y Enlatados
  { id: 31, name: 'Pasta de tomate 400 gr', category: 'conserva', description: 'Pasta de tomate 400 gr', image: '/images/pasta400.png', price: 1.6, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 43, name: 'Pasta de tomate Vima 3 Kg', category: 'conserva', description: 'Pasta de tomate 3 Kg', image: '/images/vima3kg.png', price: 9.4, availableIn: [4,5,6,7,8,9,10,11] },
  { id: 32, name: 'Pasta de tomate 800 gr', category: 'conserva', description: 'Pasta de tomate 800 gr', image: '/images/800gr.png', price: 3.5, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 33, name: 'Leche condensada cocinada', category: 'conserva', description: 'Leche condensada cocinada', image: '/images/cocinada.png', price: 2, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 34, name: 'Mayonesa celorio', category: 'conserva', description: 'Mayonesa Celorio', image: '/images/celorio.png', price: 3.8, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },

  // Mercado
  { id: 35, name: 'Aceite 1 L', category: 'mercado', description: 'Aceite 1 L', image: '/images/aceite1l.png', price: 2.9, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 36, name: 'Chocolate en polvo 500 gr', category: 'mercado', description: 'Chocolate en polvo 500 gr', image: '/images/chocopolvo.png', price: 2.8, availableIn: [3,2,1] },
  { id: 37, name: 'Gelatina', category: 'mercado', description: 'Gelatina', image: '/images/gelafresa.png', price: 0.9, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 46, name: 'Café La LLave ', category: 'mercado', description: 'Café La Llave 10 oz', image: '/images/cafelallave.png', price: 6.8, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 47, name: 'Café La Carreta', category: 'mercado', description: 'Café Prensado 10 oz', image: '/images/cafelacarreta.png', price: 6, availableIn: [4,5,6,7,8,9,10,11] },
  { id: 48, name: 'Café Sello Rojo', category: 'mercado', description: 'Café Prensado 10 oz', image: '/images/cafesellorojo.png', price: 6, availableIn: [4,5,6,7,8,9,10,11] },
  { id: 49, name: 'Café Dufiltro', category: 'mercado', description: 'Café Prensado 250 gr', image: '/images/cafedufiltro.png', price: 4.2, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 51, name: 'Refresco Zuko', category: 'mercado', description: 'Caja de 8 sobres', image: '/images/zuko.png', price: 2.95, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
  { id: 52, name: 'Maíz dulce en granos', category: 'mercado', description: 'Lata de 445 gr', image: '/images/maizdulce.png', price: 1.7, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
  { id: 54, name: 'Ketchup Kurtz', category: 'mercado', description: 'Pomo de 10 OZ', image: '/images/ketchupkurtz.png', price: 2.95, availableIn: [4,5,6,7,8,9,10,11,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },

  // Aseo
  { id: 38, name: 'Papel higiénico', category: 'aseo', description: 'Papel higiénico', image: '/images/papelhigi.png', price: 2.2, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 39, name: 'Jabón  100 gr', category: 'aseo', description: 'Jabón de 100 gr', image: '/images/jabon.png', price: 0.45 , availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 56, name: 'Detergente polvo Multiuso', category: 'aseo', description: 'Bolsa de 1 Kg', image: '/images/detergente.png', price: 2.4, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },

  // Agrito
  { id: 59, name: 'Boniato', category: 'agro', description: 'Bolsa de 5 lb', image: '/images/boniato.png', price: 2.4, availableIn: [1,2,3,4,5,6,7,8,9,10,11] },
  { id: 60, name: 'Malanga', category: 'agro', description: 'Bolsa de 5 lb', image: '/images/malanga.png', price: 3.5, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
  { id: 61, name: 'Ajo', category: 'agro', description: 'Bolsa de 10 cabezas Importados', image: '/images/ajo.png', price: 2.7, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },

  { id: 62, name: 'Whisky Old Star', category: 'liquido', description: 'Botella de 1 Lts', image: '/images/old.png', price: 7, recent: 1, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
{ id: 63, name: 'Cerveza Cristal', category: 'liquido', description: 'Caja de 24 uds', image: '/images/cristal.png', price: 24, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
{ id: 64, name: 'Cerveza Económica', category: 'liquido', description: 'Caja de 24 uds', image: '/images/timber.png', price: 20, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },

{ id: 65, name: 'Combo 1', category: 'combo', description: '1 Lomo de cerdo importado 3 lb, 1 paquete de pollo 10 lb, 1 chuleta de lomo deshuesado 2 lb, 1 masas de cerdo 2 lb, 1 picadillo de pollo 400 g, 1 paquete de salchichas, 1 mortadela de queso, 1 yogurt de fresa probiótico 1 L, 2 leches condensadas de cajita, 2 libras de frijol negro, 10 libras de arroz blanco importado, 1 bolsa de azúcar 2 lb, 1 bolsa de sal 1 lb, 2 paquetes de espaguetis 500 g, 1 pasta de tomate 400 g, 2 botellas de aceite 1 L, 1 café Dufiltro 250 g, 4 jabones de 100 g, 1 malanga 5 lb.', image: '/images/combo1.png', price: 81.45, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
{ id: 66, name: 'Combo 2', category: 'combo', description: '1 paquete de pollo de 10 lb, 2 picadillos de pollo de 400 g, 2 paquetes de salchichas, 1 cartón de huevos (30 unidades), 1 yogurt de fresa de 1 L y 2 leches condensadas de cajita..', image: '/images/combo2.png', price: 31.30, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },
{ id: 67, name: 'Combo 3', category: 'combo', description: '10 lb de Arroz grano largo importado, 2 lb de frijol negro importado, 2 lb de azucar blanca importada ', image: '/images/combo3.jpg', price:15.35, availableIn: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27] },

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

// Components
function MobileBanner() {
  return (
    <div className="mobile-banner px-4 mb-6">
      <OptimizedImage 
        src="/images/banner17.m.png" 
        alt="TuDespensa.25 - Ofertas Especiales"
        className="w-full h-full object-cover rounded-xl shadow-md"
      />
      <div 
        className="w-full h-full bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-xl flex flex-col items-center justify-center text-white p-4 text-center shadow-md"
        style={{display: 'none'}}
      >
        <div className="icon-shopping-basket text-4xl mb-3"></div>
        <h3 className="text-xl font-bold mb-2">TuDespensa.25</h3>
        <p className="text-sm opacity-90">¡Ofertas especiales !</p>
        <p className="text-xs opacity-80 mt-2">Descuentos hasta 30%</p>
      </div>
    </div>
  );
}

const SpecialOfferModal = React.memo(({ isOpen, onClose, onNavigateToProduct }) => {
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  // Productos destacados memoizados
  const featuredProducts = React.useMemo(() => 
    productData.filter(product => [, , 65, 66].includes(product.id)),
  []);

  if (!isOpen) return null;

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleNavigate = () => {
    if (selectedProduct) {
      onNavigateToProduct(selectedProduct);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 special-offer-modal-container">
      <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden animate-scale-in special-offer-modal-content">
        <div className="relative">
          <OptimizedImage
            src="/images/oferta-especial.jpg"
            alt="Oferta Especial"
            className="w-full h-48 object-cover special-offer-image"
          />
          <div 
            className="w-full h-48 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] flex flex-col items-center justify-center text-white p-4 text-center special-offer-image"
            style={{display: 'none'}}
          >
            <div className="icon-tag text-4xl mb-3"></div>
            <h3 className="text-2xl font-bold mb-2">¡OFERTA ESPECIAL!</h3>
            <p className="text-lg opacity-90">Descuentos exclusivos</p>
            <p className="text-sm opacity-80 mt-1">Hasta 30% de descuento</p>
          </div>
          
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse special-offer-badge">
            ¡NUEVO!
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <h2 className="text-2xl font-bold text-center text-[var(--text-primary)] mb-4 special-offer-title">
            Oferta Especial de la Semana
          </h2>
          
          <p className="text-[var(--text-secondary)] text-center mb-6 special-offer-description">
            Descubre nuestros productos en promoción con descuentos exclusivos. 
            ¡Aprovecha estas ofertas por tiempo limitado!
          </p>

          <div className="mb-6">
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-3 text-center">
              Selecciona un producto destacado:
            </label>
            <div className="grid grid-cols-2 gap-2 special-offer-products-grid">
              {featuredProducts.map(product => (
                <button
                  key={product.id}
                  onClick={() => handleProductSelect(product)}
                  className={`p-3 border rounded-lg text-left transition-all special-offer-product-item ${
                    selectedProduct?.id === product.id 
                      ? 'border-[var(--primary-color)] bg-green-50 ring-2 ring-[var(--primary-color)] ring-opacity-30' 
                      : 'border-gray-200 hover:border-[var(--primary-color)]'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <OptimizedImage 
                      src={product.image} 
                      alt={product.name}
                      className="w-8 h-8 object-cover rounded special-offer-product-image"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-[var(--text-primary)] truncate special-offer-product-name">
                        {product.name}
                      </p>
                      <p className="text-xs text-[var(--secondary-color)] font-bold special-offer-product-price">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3 special-offer-buttons">
            <button
              onClick={handleNavigate}
              disabled={!selectedProduct}
              className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all special-offer-primary-button ${
                selectedProduct 
                  ? 'bg-[var(--secondary-color)] text-white hover:bg-opacity-90 transform hover:scale-105' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <div className="icon-arrow-right text-lg"></div>
              <span>
                {selectedProduct ? 'Ver Oferta Seleccionada' : 'Selecciona un Producto'}
              </span>
            </button>
            
            <button
              onClick={onClose}
              className="w-full py-3 bg-gray-100 text-[var(--text-primary)] rounded-lg font-medium hover:bg-gray-200 transition-all special-offer-secondary-button"
            >
              Seguir Explorando
            </button>
          </div>

          <div className="mt-4 text-center special-offer-terms">
            <p className="text-xs text-gray-500">
              * Oferta válida por tiempo limitado
            </p>
            <p className="text-xs text-gray-500">
              * Precios sujetos a disponibilidad
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

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
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
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
                    <p className="text-sm font-semibold text-[var(--primary-color)]">${item.price.toFixed(2)} USD</p>
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
                    <p className="text-xs font-medium text-[var(--text-primary)]">${(item.price * item.quantity).toFixed(2)}</p>
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
                className="w-full bg-[var(--primary-color)] text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2"
              >
                <div className="icon-message-circle text-lg"></div>
                <span>Procesar Pedido por WhatsApp</span>
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

const Header = React.memo(({ searchTerm, setSearchTerm, selectedMunicipality, setSelectedMunicipality, cartItems, onCartClick }) => {
  const [showMunicipalityDropdown, setShowMunicipalityDropdown] = React.useState(false);

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
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center" style={{display: 'none'}}>
              <div className="icon-shopping-basket text-xl text-[var(--primary-color)]"></div>
            </div>
            <h1 className="text-lg font-bold">TuDespensa25</h1>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <button 
                onClick={() => setShowMunicipalityDropdown(!showMunicipalityDropdown)}
                className="flex items-center space-x-1 bg-white bg-opacity-20 rounded-lg px-3 py-2"
              >
                <div className="icon-map-pin text-sm text-white"></div>
                <span className="text-sm">{municipalities.find(m => m.id === selectedMunicipality)?.name || 'Seleccionar'}</span>
                <div className="icon-chevron-down text-sm text-white"></div>
              </button>
              {showMunicipalityDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                  {municipalities.map(municipality => (
                    <button
                      key={municipality.id}
                      onClick={() => {
                        setSelectedMunicipality(municipality.id);
                        setShowMunicipalityDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 text-[var(--text-primary)] hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {municipality.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={onCartClick}
              className="relative w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
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
    
    // Copiar al portapapeles
    navigator.clipboard.writeText(shareUrl).then(() => {
      // Mostrar notificación de éxito
      alert('¡Enlace copiado! Comparte este producto.');
    }).catch(() => {
      // Fallback
      const tempInput = document.createElement('input');
      tempInput.value = shareUrl;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      alert('¡Enlace copiado! Comparte este producto.');
    });
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <div className="aspect-square bg-gray-100 relative overflow-hidden">
        <OptimizedImage
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 flex flex-col space-y-1">
          <button 
            onClick={handleLikeClick}
          >
            <div className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-sm">
              <div className={`icon-heart text-lg ${isLiked ? 'text-red-500' : 'text-gray-400'}`}></div>
            </div>
          </button>
          {/* NUEVO BOTÓN DE COMPARTIR */}
          <button 
            onClick={handleShare}
          >
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
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-900 rounded-full">
            {categories.find(c => c.id === product.category)?.name}
          </span>
          <span className="text-sm font-bold text-[var(--secondary-color)]">${product.price.toFixed(2)}</span>
        </div>
        <button 
          onClick={handleAddToCart}
          className="w-full bg-[var(--secondary-color)] text-white py-2 px-3 rounded-lg text-sm font-medium flex items-center justify-center space-x-1 hover:bg-opacity-90 transition-all"
        >
          <div className="icon-shopping-cart text-sm"></div>
          <span>Añadir al carrito</span>
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
              <span className="text-2xl font-bold text-[var(--secondary-color)]">${product.price.toFixed(2)}</span>
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
              className="w-full bg-[var(--secondary-color)] text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all"
            >
              <div className="icon-shopping-cart text-lg"></div>
              <span>Añadir al carrito</span>
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
    <footer className="bg-[var(--text-primary)] text-white mt-12">
      <div className="px-4 py-8">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
              <div className="icon-shopping-basket text-xl text-white"></div>
            </div>
            <h3 className="text-2xl font-bold">TuDespensa.25</h3>
          </div>
          <p className="text-gray-300 text-sm mb-4">Tu despensa de confianza para productos frescos y de calidad</p>
        </div>
        
        <div className="space-y-4 text-center text-sm">
          <div>
            <h4 className="font-semibold text-[var(--primary-color)] mb-2">Contacto</h4>
            <p className="text-gray-300">📱 +1 (914) 621-8369</p>
            <p className="text-gray-300">📧 ventas@tudespensa25.com</p>
            <p className="text-gray-300">📍 Disponible en todos los municipios de Artemisa</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-[var(--primary-color)] mb-2">Horarios</h4>
            <p className="text-gray-300">Las 24 h del día</p>
            <p className="text-gray-300">Los 7 días de la semana</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-[var(--primary-color)] mb-2">Síguenos</h4>
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
          <p className="text-xs text-gray-400">© 2025 TuDespensa.25. Todos los derechos reservados.</p>
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
  const [showSpecialOffer, setShowSpecialOffer] = React.useState(true);

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
      message: `${product.name} ha sido añadido al carrito`,
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

  const handleNavigateToProduct = (product) => {
    setSelectedProduct(product);
  };

  // Cierra el modal automáticamente después de 15 segundos
  React.useEffect(() => {
    if (showSpecialOffer) {
      const timer = setTimeout(() => {
        setShowSpecialOffer(false);
      }, 15000);
      return () => clearTimeout(timer);
    }
  }, [showSpecialOffer]);

  const handleProcessOrder = (customerData, discountCode = '', discountPercentage = 0, discountAmount = 0) => {
    const selectedMunicipalityName = municipalities.find(m => m.id === selectedMunicipality)?.name || '';
    
    let orderMessage = `*NUEVO PEDIDO - TuDespensa.25*\n\n`;
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
    
    // Información de descuento si aplica
    if (discountCode && discountPercentage > 0) {
      orderMessage += `\n*INFORMACIÓN DE DESCUENTO:*\n`;
      orderMessage += `🎫 Código: ${discountCode}\n`;
      orderMessage += `📉 Descuento: ${discountPercentage}%\n`;
      orderMessage += `💵 Ahorro: $${discountAmount.toFixed(2)} USD\n\n`;
    }
    
    orderMessage += `\n*PRODUCTOS SOLICITADOS:*\n`;
    let subtotal = 0;
    cart.forEach((item, index) => {
      const itemSubtotal = item.price * item.quantity;
      subtotal += itemSubtotal;
      orderMessage += `${index + 1}. ${item.name}\n`;
      orderMessage += `   💰 Precio: $${item.price.toFixed(2)} USD\n`;
      orderMessage += `   📦 Cantidad: ${item.quantity}\n`;
      orderMessage += `   💵 Subtotal: $${itemSubtotal.toFixed(2)} USD\n\n`;
    });
    
    // Resumen de precios
    orderMessage += `*RESUMEN DE PAGO:*\n`;
    orderMessage += `🛒 Subtotal: $${subtotal.toFixed(2)} USD\n`;
    
    if (discountPercentage > 0) {
      orderMessage += `🎫 Descuento (${discountPercentage}%): -$${discountAmount.toFixed(2)} USD\n`;
    }
    
    const total = discountPercentage > 0 ? subtotal - discountAmount : subtotal;
    orderMessage += `💰 *TOTAL DEL PEDIDO: $${total.toFixed(2)} USD*\n`;
    
    orderMessage += `\n*DATOS DEL VENDEDOR:*\n`;
    orderMessage += `🏪 Tienda: TuDespensa.25\n`;
    orderMessage += `📞 Contacto: +5354066204\n`;
    orderMessage += `📧 Email: ventas@tudespensa25.com\n`;
    
    orderMessage += `\n*DATOS DE ENTREGA:*\n`;
    orderMessage += `🚚 Entrega a domicilio \n`;
    orderMessage += `⏰ Tiempo estimado: 24 a 48 horas\n`;
    orderMessage += `💳 Pago: Efectivo o transferencia Zelle\n`;

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
      />
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
      
      <SpecialOfferModal
        isOpen={showSpecialOffer}
        onClose={() => setShowSpecialOffer(false)}
        onNavigateToProduct={handleNavigateToProduct}
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