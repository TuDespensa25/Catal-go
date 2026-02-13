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

// NUEVA LISTA DE MUNICIPIOS PARA VALIDACIÓN
const MUNICIPIOS_GRUPO_1 = [1, 2]; // San Cristóbal, Candelaria
const MUNICIPIOS_GRUPO_2 = [4, 5, 6, 7, 8, 9, 10, 11]; // Todos los demás (sin Bahía Honda)

// ==================== ICONOS CON EMOJIS ====================
const categories = [
  { id: 'combo', name: 'Combos', icon: '🥫' },
  { id: 'carnicos', name: 'Cárnicos', icon: '🥩' },
  { id: 'cereales', name: 'Cereales', icon: '🌾' },
  { id: 'lacteos', name: 'Lácteos', icon: '🥛' },
  { id: 'conserva', name: 'Conservas', icon: '🥫' },
  { id: 'mercado', name: 'Mercado', icon: '🛒' },
  { id: 'aseo', name: 'Aseo', icon: '🧹' },
  { id: 'agro', name: 'Agro', icon: '🌽' },
  { id: 'liquido', name: 'Bebidas', icon: '🧃' },
  { id: 'electro', name: 'Electro', icon: '⚡' },
];

const productData = [
  // Cárnicos y embutidos
  { id: 40, name: 'Pollo caja de 33 lb de postas', category: 'carnicos', description: 'Caja de 33 lb de pollo', image: '/images/pollo_caja33.png', price: 38, availableIn: 1 },
  { id: 42, name: 'Lomo de Cerdo Importado ', category: 'carnicos', description: 'Porción de 3 Lb', image: '/images/lomo.png', price: 11.2, availableIn: [1,2] },
  { id: 2, name: 'Pollo paquete de 10 lb', category: 'carnicos', description: 'Paquete de 10 lb de pollo', image: '/images/pollo10lb.png', price: 11.4, availableIn: [1,2] },
  { id: 88, name: 'Pollo paquete de 11 lb', category: 'carnicos', description: 'Paquete de 11 lb de pollo', image: '/images/pollo11lb.png', price: 13.2, availableIn: 1 },
  { id: 3, name: 'Pechuga paquete de 2 kg', category: 'carnicos', description: 'Pechuga de pollo 2 kg', image: '/images/pechuga2kg.png', price: 14, availableIn: [1,2] },
  { id: 5, name: 'Chuleta de lomo deshuesado 2 lb', category: 'carnicos', description: 'Chuleta de lomo deshuesado', image: '/images/chuletalomo.png', price: 8.5, availableIn: [1,2] },
  { id: 6, name: 'Masas de cerdo 2 lb', category: 'carnicos', description: 'Masas de cerdo 2 lb', image: '/images/masas.png', price: 8, availableIn: [1,2] },
  { id: 7, name: 'Bistec de cerdo 2 lb', category: 'carnicos', description: 'Bistec de cerdo 2 lb', image: '/images/bisteclomo.png', price: 9, availableIn: [1,2] },
  { id: 10, name: 'Picadillo 400 gr de pollo', category: 'carnicos', description: 'Picadillo de pollo 400 gr', image: '/images/picadillo.png', price: 1.85, availableIn: [1,2] },
  { id: 11, name: 'Hamburguesas mixtas de pollo y cerdo', category: 'carnicos', description: 'Hamburguesas mixtas de pollo y cerdo', image: '/images/hamburguesas.png', price: 2.3, availableIn: 2 },
  { id: 12, name: 'Mortadella Seara de Pollo ', category: 'carnicos', description: 'Mortadella de 500 gr', image: '/images/seara500.png', price: 2.3, availableIn: 1 },
  { id: 13, name: 'Mortadella clásica', category: 'carnicos', description: 'Mortadella clásica', image: '/images/mortclasica.png', price:2.3, availableIn: 1 },
  { id: 14, name: 'Mortadela de queso', category: 'carnicos', description: 'Mortadella de queso', image: '/images/mortqueso.png', price: 2.3, availableIn: 1 },
  { id: 15, name: 'Mortadela de aceituna', category: 'carnicos', description: 'Mortadella con aceituna', image: '/images/mortaceit.png', price: 2.3, availableIn: 2 },
  { id: 45, name: 'Carne de Res troceada', category: 'carnicos', description: 'Bolsa de 1 Kg', image: '/images/restroceada.png', price: 14.4, availableIn: 2 },
  { id: 17, name: 'Hígado de pollo 1 kg', category: 'carnicos', description: 'Hígado de pollo 1 kg', image: '/images/higado.png', price: 2.60, availableIn: 2 },
  { id: 18, name: 'Salchichas', category: 'carnicos', description: 'Salchichas', image: '/images/salchichas.png', price:1.75, availableIn: [1,2] },

  // Lácteos y Huevos
  { id: 19, name: 'Leche entera 1 kg', category: 'lacteos', description: 'Leche entera 1 kg', image: '/images/leche1kg.png', price: 10, availableIn: 1 },
  { id: 20, name: 'Cartón de huevos', category: 'lacteos', description: 'Cartón de huevos frescos', image: '/images/huevo30.png', price: 8.5, availableIn: 2 },
  { id: 22, name: 'Leche condensada de cajita', category: 'lacteos', description: 'Leche condensada de cajita', image: '/images/cajitaleche.png', price: 1.65, availableIn: [1,2] },
  { id: 23, name: 'Leche condensada lata', category: 'lacteos', description: 'Leche condensada lata', image: '/images/nezkaleche.png', price: 1.8, availableIn: [] },
  { id: 55, name: 'Helado', category: 'lacteos', description: 'Cubeta de 3L', image: '/images/helado.png', price: 9, availableIn: 2 },
  { id: 57, name: 'Leche en Polvo', category: 'lacteos', description: 'Bolsa de 1 kg', image: '/images/lechepolvomu.png', price: 8.5, availableIn: 2 },
  { id: 58, name: 'Cartón de huevos', category: 'lacteos', description: '30 uds frescos 100% orgánicos', image: '/images/huevo30.png', price: 9.4, availableIn: 1 },

  // Cereales, Pastas y Granos
  { id: 24, name: 'Frijol negro 1 lb', category: 'cereales', description: 'Frijol negro 1 lb', image: '/images/frijol2lb.png', price: 1.2, availableIn: [1,2] },
  { id: 25, name: 'Arroz Grano Largo', category: 'cereales', description: 'Arroz bolsa 2 lb', image: '/images/arroz2lb.png', price: 1.9, availableIn: [1,2] },
  { id: 26, name: 'Sal 1 lb', category: 'cereales', description: 'Sal 1 lb', image: '/images/sal.png', price: 0.65, availableIn: [1,2] },
  { id: 27, name: 'Azúcar 2 lb', category: 'cereales', description: 'Azúcar 2 lb', image: '/images/azucar2lb.png', price: 1.95, availableIn: [1,2] },
  { id: 28, name: 'Spaguetis', category: 'cereales', description: 'Spaguetis', image: '/images/spaguetis.png', price:1.2, availableIn: [1,2] },
  { id: 29, name: 'Arroz Grano Largo 25 kg (55 lb)', category: 'cereales', description: 'Saco de arroz  25 kg (55 lb)', image: '/images/arroz25kgsur.png', price: 45, availableIn: 1 },
  { id: 44, name: 'Arroz Grano Largo 25 kg (55 lb) - Otra marca', category: 'cereales', description: 'Saco de arroz  25 kg (55 lb)', image: '/images/Arroz55lbguy.png', price: 45, availableIn: [] },
  { id: 30, name: 'Harina de trigo 1 kg', category: 'cereales', description: 'Harina de trigo 1 kg', image: '/images/harinafresko.png', price: 2.3, availableIn: [1,2] },
  { id: 53, name: 'Frijoles Blanco Del Campo ', category: 'cereales', description: 'Bolsa de 16 OZ', image: '/images/alubiasdelcampo.png', price: 2.4, availableIn: 2 },

  // Conserva y Enlatados
  { id: 31, name: 'Pasta de tomate 400 gr', category: 'conserva', description: 'Pasta de tomate 400 gr', image: '/images/pasta400.png', price: 1.6, availableIn: [1,2] },
  { id: 43, name: 'Pasta de tomate Vima 3 Kg', category: 'conserva', description: 'Pasta de tomate 3 Kg', image: '/images/vima3kg.png', price: 9.4, availableIn: 2 },
  { id: 32, name: 'Pasta de tomate 800 gr', category: 'conserva', description: 'Pasta de tomate 800 gr', image: '/images/800gr.png', price: 3.5, availableIn: [1,2] },
  { id: 33, name: 'Leche condensada cocinada', category: 'conserva', description: 'Leche condensada cocinada', image: '/images/cocinada.png', price: 2.2, availableIn: [1,2] },
  { id: 34, name: 'Mayonesa celorio', category: 'conserva', description: 'Mayonesa Celorio', image: '/images/celorio.png', price: 4.25, availableIn: [1,2] },

  // MERCADO
  { id: 35, name: 'Aceite 1 L', category: 'mercado', description: 'Aceite de cocina 1 Litro', image: '/images/aceite1l.png', price: 2.95, availableIn: [1,2] },
  { id: 90, name: 'Aceite 900 ml', category: 'mercado', description: 'Aceite de cocina 900 ml', image: '/images/aceite900ml.png', price: 2.65, availableIn: 2 },
  { id: 36, name: 'Chocolate en polvo 500 gr', category: 'mercado', description: 'Chocolate en polvo 500 gr', image: '/images/chocopolvo.png', price: 2.9, availableIn: 1 },
  { id: 37, name: 'Gelatina', category: 'mercado', description: 'Gelatina', image: '/images/gelafresa.png', price: 0.9, availableIn: [1,2] },
  { id: 46, name: 'Café La LLave ', category: 'mercado', description: 'Café La Llave 10 oz', image: '/images/cafelallave.png', price: 6.9, availableIn: [] },
  { id: 47, name: 'Café La Carreta', category: 'mercado', description: 'Café Prensado 10 oz', image: '/images/cafelacarreta.png', price: 6.4, availableIn: 2 },
  { id: 48, name: 'Café Sello Rojo', category: 'mercado', description: 'Café Prensado 10 oz', image: '/images/cafesellorojo.png', price: 6.4, availableIn: 2 },
  { id: 49, name: 'Café Dufiltro', category: 'mercado', description: 'Café Prensado 250 gr', image: '/images/cafedufiltro.png', price: 4.5, availableIn: [1,2] },
  { id: 51, name: 'Refresco Zuko', category: 'mercado', description: 'Caja de 8 sobres', image: '/images/zuko.png', price: 2.95, availableIn: [1,2] },
  { id: 52, name: 'Maíz dulce en granos', category: 'mercado', description: 'Lata de 445 gr', image: '/images/maizdulce.png', price: 1.7, availableIn: [1,2] },
  { id: 54, name: 'Ketchup Kurtz', category: 'mercado', description: 'Pomo de 10 OZ', image: '/images/ketchupkurtz.png', price: 2.95, availableIn: 2 },

  // Aseo
  { id: 38, name: 'Papel higiénico', category: 'aseo', description: 'Papel higiénico', image: '/images/papelhigi.png', price: 2.4, availableIn: [1,2] },
  { id: 39, name: 'Jabón  100 gr', category: 'aseo', description: 'Jabón de 100 gr', image: '/images/jabon.png', price: 0.48 , availableIn: [1,2] },
  { id: 56, name: 'Detergente polvo Multiuso', category: 'aseo', description: 'Bolsa de 1 Kg', image: '/images/detergente.png', price: 2.6, availableIn: [1,2] },

  // Agrito
  { id: 59, name: 'Boniato', category: 'agro', description: 'Bolsa de 5 lb', image: '/images/boniato.png', price: 2.4, availableIn: [1,2] },
  { id: 60, name: 'Malanga', category: 'agro', description: 'Bolsa de 5 lb', image: '/images/malanga.png', price: 3.5, availableIn: [1,2] },
  { id: 61, name: 'Ajo', category: 'agro', description: 'Bolsa de 10 cabezas Importados', image: '/images/ajo.png', price: 2.7, availableIn: 1 },

  // Líquidos
  { id: 62, name: 'Whisky Old Star', category: 'liquido', description: 'Botella de 1 Lts', image: '/images/old.png', price: 7, recent: 1, availableIn: [1,2] },
  { id: 63, name: 'Cerveza Cristal', category: 'liquido', description: 'Caja de 24 uds', image: '/images/cristal.png', price: 24, availableIn: [1,2] },
  { id: 64, name: 'Cerveza Económica', category: 'liquido', description: 'Caja de 24 uds', image: '/images/timber.png', price: 20, availableIn: [1,2] },
  { id: 69, name: 'Malta Guajira', category: 'liquido', description: 'Botella de 330 ml', image: '/images/guajira.png', price: 0.75, availableIn: [1,2] },
  { id: 70, name: 'Malta Guajira Blister', category: 'liquido', description: 'Blister de 6 uds', image: '/images/guajirablister.png', price: 4.4, availableIn: [1,2] },

  // COMBOS
  { id: 89, name: 'Combo 9', category: 'combo', description: '2 Sobres de Spaguetis 500gr, 2 Mortadella Seara 500 gr, 2 Pasta de tomate 400 gr, Botella de aceite 1 Lt', image: '/images/combo9.png', price: 11.45, availableIn: [1,2] },
  { id: 65, name: 'Combo 1', category: 'combo', description: '1 Lomo de cerdo importado 3 lb, 1 paquete de pollo 10 lb, 1 chuleta de lomo deshuesado 2 lb, 1 masas de cerdo 2 lb, 1 picadillo de pollo 400 g, 1 paquete de salchichas, 1 mortadela de queso, 1 yogurt de fresa probiótico 1 L, 2 leches condensadas de cajita, 2 libras de frijol negro, 10 libras de arroz blanco importado, 1 bolsa de azúcar 2 lb, 1 bolsa de sal 1 lb, 2 paquetes de espaguetis 500 g, 1 pasta de tomate 400 g, 2 botellas de aceite 1 L, 1 café Dufiltro 250 g, 4 jabones de 100 g, 1 malanga 5 lb.', image: '/images/combo1.png', price: 89.45, availableIn: [1,2] },
  { id: 66, name: 'Combo 2', category: 'combo', description: '1 paquete de pollo de 10 lb, 2 picadillos de pollo de 400 g, 2 paquetes de salchichas, 1 cartón de huevos (30 unidades), 1 yogurt de fresa de 1 L y 2 leches condensadas de cajita..', image: '/images/combo2.png', price: 34.45, availableIn: 2 },
  { id: 67, name: 'Combo 3', category: 'combo', description: '10 lb de Arroz grano largo importado, 2 lb de frijol negro importado, 2 lb de azucar blanca importada ', image: '/images/combo3.jpg', price:17.35, availableIn: [1,2] },
  { id: 68, name: 'Combo 4', category: 'combo', description: 'Chuleta de lomo deshuesado 2 lb (1 unidad), Masas de cerdo 2 lb (1 unidad), Mortadela de queso 500 gr (2 unidades), Mortadela clásica 500 gr (2 unidades), Aceite 1 L (2 unidades), Gelatina  (2 unidades), Jabón 100 g (5 unidades) + 5 LB de Malanga GRATIS ', image: '/images/combo4.png', price:37.65, availableIn: [1,2] },
  { id: 71, name: 'Combo 5 ', category: 'combo', description: '12 maltas guajiras, 6 leche condensada', image: '/images/combo5.png', price: 22.6, availableIn: [1,2] },
  { id: 72, name: 'Combo 6', category: 'combo', description: '1 lomo de cerdo importado (3 lb) + 10 lb de arroz grano largo + 2 paquetes de espagueti (500 g c/u) + 1 paquete de harina de trigo (500 g) + 1 yogurt probiótico de fresa (1 L) + 1 cartón de huevos (30 u) + 2 pastas de tomate (400 g c/u) + 1 chocolate en polvo (500 g) + 2 gelatinas + 1 caja de refresco Zuko (8 sobres) + 1 café Dufiltro (250 g) + 1 paquete de papel higiénico (4 unidades) + 4 jabones (100 g c/u) + 1 bolsa de malanga (5 lb) + 1 bolsa de 10 cabezas de ajo', image: '/images/combo6.png', price: 65.99, availableIn: [1,2] },
  { id: 73, name: 'Combo 7', category: 'combo', description: 'Arroz Grano Largo importado (10 lb), Frijol Negro Importado (4 lb), Azúcar Blanca Importada (4 lb), Aceite de Girasol 1 L (6 uds)', image: '/images/combo7.png', price: 30.99, availableIn: [1,2] },
  { id: 74, name: 'Combo 8 ', category: 'combo', description: ' Chuleta de lomo deshuesado 2 lb (1 unid), Masas de cerdo 2 lb (1 unid), Yogurt de fresa 1 L (1 unid), Arroz Grano Largo 10 , Azúcar blanca 4 lb , Frijol negro 2 lb , Spaguetis 500 gr (2 unid), Pasta de tomate 400 g (1 unid), Café Dufiltro 250 gr (1 unid), Jabón 100 g (4 unid), Malta Guajira (6 unid), Leche condensada en cajita (2 unid), Aceite 1 L (2 unid)', image: '/images/combo8.png', price: 60.99, availableIn: [1,2] },

  // Electrodomésticos
  { id: 76, name: "Olla reina Milexus ", category: "electro", description: "Olla reina de 6L Milexus", image: "/images/reina.png", price: 68, availableIn: [1,2] },
  { id: 77, name: "Olla Arrocera ", category: "electro", description: "Olla arrocera de 1,8 l Milexus", image: "/images/arrocera.png", price: 48, availableIn: [1,2] },
  { id: 80, name: "Fogon Infrarrojo  ", category: "electro", description: "Fogon Infrarrojo 1300 W  ", image: "/images/infra.png", price: 58, availableIn: [1,2] },
  { id: 81, name: "Lavadora Semiautomática Milexus 7 L  ", category: "electro", description: "Lavadora semiautomatica 7 L ", image: "/images/semi7.png", price: 210, availableIn: [1,2] },
  { id: 82, name: "Split milexus", category: "electro", description: "Milexus 1200 btu", image: "/images/split.png", price: 285, availableIn: [1,2] },
  { id: 83, name: "Frezeer 3.5 pies", category: "electro", description: "Milexus 3.5 pies", image: "/images/freezer4p.png", price: 215, availableIn: [1,2] },
  { id: 84, name: "Frezeer 4.2 pies", category: "electro", description: "Milexus 4.2 pies", image: "/images/freezer6p.png", price: 230, availableIn: [1,2] },
  { id: 85, name: "Tv de 32", category: "electro", description: "Tv inteligente 32 pulgadas", image: "/images/32.png", price: 220, availableIn: [1,2] },
  { id: 86, name: "Batidora Milexus", category: "electro", description: "Batidora 1.5 Lt vaso de cristal", image: "/images/batidora.png", price: 45, availableIn: [1,2] },
];

// Función para verificar disponibilidad por municipio
function isProductAvailable(product, municipalityId) {
  if (Array.isArray(product.availableIn) && product.availableIn.length === 0) {
    return false;
  }
  
  if (product.availableIn === 1) {
    return MUNICIPIOS_GRUPO_1.includes(municipalityId);
  }
  
  if (product.availableIn === 2) {
    return MUNICIPIOS_GRUPO_2.includes(municipalityId);
  }
  
  if (Array.isArray(product.availableIn) && product.availableIn.includes(1) && product.availableIn.includes(2)) {
    return true;
  }
  
  return false;
}

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
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center rounded-full">
          <span className="text-2xl text-gray-400">📦</span>
        </div>
      )}
    </div>
  );
});

// ==================== MODAL DE MUNICIPIO ====================
const MunicipalityModal = React.memo(({ isOpen, onClose, selectedMunicipality, setSelectedMunicipality }) => {
  if (!isOpen) return null;

  const handleMunicipalitySelect = (municipalityId) => {
    setSelectedMunicipality(municipalityId);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden animate-scale-in">
        <div className="bg-gradient-to-r from-[#10b981] to-[#059669] p-6 text-white text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <span className="text-3xl">📍</span>
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
                    ? 'border-[#10b981] bg-green-50 ring-2 ring-[#10b981] ring-opacity-30'
                    : 'border-gray-200 hover:border-[#10b981] hover:bg-gray-50'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  selectedMunicipality === municipality.id
                    ? 'bg-[#10b981] text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  <span className="text-lg">📍</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#0f172a] text-lg">
                    {municipality.name.split(', ')[1]}
                  </h3>
                  <p className="text-sm text-[#64748b]">
                    {municipality.name.split(', ')[0]}
                  </p>
                </div>
                {selectedMunicipality === municipality.id && (
                  <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center">
                    <span className="text-xs text-white">✓</span>
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
                <span className="text-xs text-white">ℹ️</span>
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
            className="w-full bg-gray-100 text-[#0f172a] py-3 rounded-full font-medium hover:bg-gray-200 transition-all"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
});

// ==================== NOTIFICACIÓN ====================
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
      <div className="bg-[#10b981] text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2">
        <span className="text-lg">✓</span>
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
});

// ==================== MODAL DE CARRITO ====================
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

  const validDiscountCodes = {
    'CLIENTEF': 5,
    'BIENVENIDOhoy': 10,
    'PRIMERACOMPRAtd25.': 15
  };

 const applyDiscount = () => {
  const code = discountCode.trim();
  
  if (!code) {
    setDiscountError('Por favor ingresa un código');
    return;
  }

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
      <div className="bg-white w-full max-w-md max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl">
        <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#0f172a] flex items-center gap-2">
            <span>🛒</span> Mi Carrito ({getTotalItems()})
          </h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full transition">
            <span className="text-xl text-[#64748b]">✕</span>
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-3xl text-gray-400">🛒</span>
            </div>
            <p className="text-[#64748b]">Tu carrito está vacío</p>
          </div>
        ) : (
          <>
            <div className="p-4 space-y-3">
              {cart.map(item => (
                <div key={item.id} className="flex items-center space-x-3 bg-gray-50 rounded-2xl p-3">
                  <OptimizedImage src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-[#0f172a]">{item.name}</h3>
                    <p className="text-xs text-[#64748b]">{item.description}</p>
                    <p className="text-sm font-semibold text-[#10b981]">
                      ${item.price.toFixed(2)} USD
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <div className="flex items-center space-x-2">
                      <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 rounded-full bg-white border flex items-center justify-center hover:bg-gray-50 transition">
                        <span className="text-sm text-[#64748b]">−</span>
                      </button>
                      <span className="text-sm font-medium w-8 text-center text-[#0f172a]">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 rounded-full bg-white border flex items-center justify-center hover:bg-gray-50 transition">
                        <span className="text-sm text-[#64748b]">+</span>
                      </button>
                    </div>
                    <p className="text-xs font-medium text-[#0f172a]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Sección de Código de Descuento */}
              <div className="border-t pt-4 mt-4">
                <div className="mb-3">
                  <h3 className="text-sm font-medium text-[#0f172a] mb-2 flex items-center gap-1">
                    <span>🏷️</span> Código de Descuento
                  </h3>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Ingresa tu código"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      disabled={discountApplied}
                      className="flex-1 p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#10b981] disabled:bg-gray-100"
                    />
                    {!discountApplied ? (
                      <button
                        onClick={applyDiscount}
                        className="bg-[#10b981] text-white px-4 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all"
                      >
                        Aplicar
                      </button>
                    ) : (
                      <button
                        onClick={removeDiscount}
                        className="bg-red-500 text-white px-4 py-2 rounded-full font-medium hover:bg-red-600 transition-all"
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
                <div className="space-y-2 bg-gray-50 rounded-2xl p-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#64748b]">Subtotal:</span>
                    <span className="text-[#0f172a] font-medium">${getSubtotalPrice().toFixed(2)} USD</span>
                  </div>
                  
                  {discountApplied && (
                    <>
                      <div className="flex justify-between text-sm text-green-600">
                        <span>Descuento ({discountPercentage}%):</span>
                        <span>-${getDiscountAmount().toFixed(2)} USD</span>
                      </div>
                      <div className="border-t border-gray-200 pt-2 mt-2">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-semibold text-[#0f172a]">Total:</span>
                          <span className="text-xl font-bold text-[#10b981]">
                            ${getTotalPrice().toFixed(2)} USD
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {!discountApplied && (
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-[#0f172a]">Total:</span>
                      <span className="text-xl font-bold text-[#10b981]">
                        ${getSubtotalPrice().toFixed(2)} USD
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="border-t p-4 space-y-3">
              <h3 className="font-medium text-[#0f172a] flex items-center gap-1">
                <span>👤</span> Datos del comprador
              </h3>
              <input
                type="text"
                placeholder="Nombre completo del comprador *"
                value={customerData.name}
                onChange={(e) => setCustomerData({...customerData, name: e.target.value})}
                className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#10b981]"
              />
              <input
                type="tel"
                placeholder="Teléfono del comprador *"
                value={customerData.phone}
                onChange={(e) => setCustomerData({...customerData, phone: e.target.value})}
                className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#10b981]"
              />
              
              <h3 className="font-medium text-[#0f172a] pt-4 border-t flex items-center gap-1">
                <span>🎁</span> Datos del beneficiario (quien recibe)
              </h3>
              <input
                type="text"
                placeholder="Nombre completo del beneficiario *"
                value={customerData.beneficiaryName}
                onChange={(e) => setCustomerData({...customerData, beneficiaryName: e.target.value})}
                className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#10b981]"
              />
              <input
                type="tel"
                placeholder="Teléfono del beneficiario *"
                value={customerData.beneficiaryPhone}
                onChange={(e) => setCustomerData({...customerData, beneficiaryPhone: e.target.value})}
                className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#10b981]"
              />
              
              <h3 className="font-medium text-[#0f172a] pt-4 border-t flex items-center gap-1">
                <span>📍</span> Entrega
              </h3>
              <textarea
                placeholder="Dirección de entrega *"
                value={customerData.address}
                onChange={(e) => setCustomerData({...customerData, address: e.target.value})}
                className="w-full p-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#10b981] h-20"
              />
              <textarea
                placeholder="Notas adicionales (opcional)"
                value={customerData.notes}
                onChange={(e) => setCustomerData({...customerData, notes: e.target.value})}
                className="w-full p-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#10b981] h-16"
              />
            </div>

            <div className="border-t p-4 space-y-3">
              <button
                onClick={handleProcessOrder}
                className="w-full bg-[#10b981] text-white py-3 rounded-full font-medium hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <span>✅</span> Procesar Pedido
              </button>
              <button
                onClick={onClose}
                className="w-full bg-gray-200 text-[#0f172a] py-3 rounded-full font-medium hover:bg-gray-300 transition-all"
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

// ==================== REDES SOCIALES ====================
const SocialMediaLinks = React.memo(() => {
  return (
    <div className="flex items-center justify-center space-x-4 px-4 py-4 bg-white border-b border-gray-100">
      <span className="text-sm font-medium text-[#64748b] mr-2">Síguenos:</span>
      
      {/* WhatsApp */}
      <a 
        href="https://whatsapp.com/channel/0029Vb89B2bBfxo2tGL8Fk0G" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center transform transition-all hover:scale-110 hover:shadow-lg"
        aria-label="WhatsApp"
      >
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.79 2.7 15.6 3.73 17.13L2.05 21.83L6.88 20.18C8.38 21.08 10.09 21.59 11.99 21.59C17.45 21.59 21.9 17.14 21.9 11.68C21.9 6.22 17.5 2 12.04 2ZM12.04 4.13C16.5 4.13 19.77 7.46 19.77 11.73C19.77 16 16.45 19.33 12.04 19.33C10.36 19.33 8.78 18.8 7.43 17.91L7.18 17.76L4.44 18.66L5.36 16.02L5.18 15.75C4.22 14.32 3.66 12.65 3.66 11.73C3.66 7.46 7.04 4.13 12.04 4.13ZM8.67 8.18C8.48 8.18 8.19 8.25 7.94 8.53C7.69 8.81 7.04 9.51 7.04 10.93C7.04 12.35 8.09 13.71 8.24 13.92C8.39 14.13 10.1 16.88 12.7 16.03C14.16 15.54 14.62 14.56 14.74 14.12C14.86 13.68 14.86 13.3 14.81 13.2C14.76 13.1 14.61 13.05 14.41 12.95C14.21 12.85 13.31 12.4 13.13 12.34C12.95 12.28 12.81 12.25 12.67 12.45C12.53 12.65 12.13 13.15 12.01 13.29C11.89 13.43 11.77 13.45 11.57 13.35C11.37 13.25 10.78 13.04 10.09 12.42C9.55 11.95 9.18 11.36 9.06 11.16C8.94 10.96 9.05 10.84 9.15 10.74C9.24 10.65 9.35 10.5 9.45 10.38C9.55 10.26 9.59 10.18 9.67 10.04C9.75 9.9 9.71 9.78 9.65 9.68C9.59 9.58 9.21 8.68 9.05 8.28C8.9 7.9 8.74 7.95 8.62 7.94C8.51 7.93 8.37 7.93 8.23 7.93C8.09 7.93 7.86 8.18 8.67 8.18Z" />
        </svg>
      </a>
      
      {/* Instagram */}
      <a 
        href="https://www.instagram.com/tudespensa.25?igsh=MWt5dzZjcWh0NnF0MA==" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcaf45] flex items-center justify-center transform transition-all hover:scale-110 hover:shadow-lg"
        aria-label="Instagram"
      >
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </a>
      
      {/* Facebook */}
      <a 
        href="https://www.facebook.com/share/16cchoNUTo/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center transform transition-all hover:scale-110 hover:shadow-lg"
        aria-label="Facebook"
      >
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>
    </div>
  );
});

// ==================== HEADER ====================
const Header = React.memo(({ searchTerm, setSearchTerm, selectedMunicipality, setSelectedMunicipality, cartItems, onCartClick, onMunicipalityClick }) => {
  return (
    <header className="bg-white text-[#0f172a] sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <OptimizedImage 
              src="https://app.trickle.so/storage/public/images/usr_0b2efdb2f0000001/2fc53855-ded6-40ff-959b-7a5c6077e0e3.svg" 
              alt="TuDespensa25 Logo" 
              className="w-10 h-10 bg-white rounded-full p-2"
            />
            <h1 className="text-lg font-bold text-[#0f172a]">TuDespensa25</h1>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={onMunicipalityClick}
              className="flex items-center space-x-2 bg-[#10b981] bg-opacity-10 rounded-full px-4 py-2 hover:bg-opacity-20 transition-all"
            >
              <span className="text-sm text-[#10b981]">📍</span>
              <span className="text-sm max-w-24 truncate text-[#0f172a]">
                {municipalities.find(m => m.id === selectedMunicipality)?.name.split(', ')[1] || 'Municipio'}
              </span>
              <span className="text-sm text-[#10b981]">▼</span>
            </button>
            <button
              onClick={onCartClick}
              className="relative w-10 h-10 bg-[#10b981] bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all"
            >
              <span className="text-lg text-[#10b981]">🛒</span>
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#f59e0b] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {cartItems}
                </span>
              )}
            </button>
          </div>
        </div>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg text-gray-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-full bg-gray-50 text-[#0f172a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:bg-white border border-gray-200"
          />
        </div>
      </div>
    </header>
  );
});

// ==================== CATEGORÍAS ====================
const CategoryGrid = React.memo(({ selectedCategory, onCategorySelect }) => {
  return (
    <section className="px-4 py-6 bg-white categories-section">
      <h2 className="text-xl font-bold text-[#0f172a] mb-5">Categorías</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`relative rounded-2xl overflow-hidden flex flex-col items-center justify-center p-4 bg-white border transition-all ${
              selectedCategory === category.id 
                ? 'border-2 border-[#10b981] bg-[#f0fdf4] shadow-md' 
                : 'border-gray-100 hover:border-[#10b981] hover:bg-[#f8fafc] hover:shadow-sm'
            }`}
          >
            <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-all ${
              selectedCategory === category.id 
                ? 'bg-[#dcfce7] scale-110' 
                : 'bg-[#f1f5f9] group-hover:bg-[#dcfce7]'
            }`}>
              <span className={`text-3xl transition-transform ${
                selectedCategory === category.id ? 'scale-110' : ''
              }`}>
                {category.icon}
              </span>
            </div>
            <p className={`text-sm font-medium text-center transition-colors ${
              selectedCategory === category.id 
                ? 'text-[#10b981] font-semibold' 
                : 'text-[#334155]'
            }`}>
              {category.name}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
});

// ==================== BOTONES FLOTANTES ====================
const FloatingWhatsAppButton = React.memo(() => {
  const handleWhatsAppClick = () => {
    const message = "¡Hola! Me interesa conocer más sobre los productos de TuDespensa.25";
    const whatsappUrl = `https://wa.me/5354066204?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 z-40 flex items-center justify-center"
      aria-label="WhatsApp"
    >
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.79 2.7 15.6 3.73 17.13L2.05 21.83L6.88 20.18C8.38 21.08 10.09 21.59 11.99 21.59C17.45 21.59 21.9 17.14 21.9 11.68C21.9 6.22 17.5 2 12.04 2ZM12.04 4.13C16.5 4.13 19.77 7.46 19.77 11.73C19.77 16 16.45 19.33 12.04 19.33C10.36 19.33 8.78 18.8 7.43 17.91L7.18 17.76L4.44 18.66L5.36 16.02L5.18 15.75C4.22 14.32 3.66 12.65 3.66 11.73C3.66 7.46 7.04 4.13 12.04 4.13ZM8.67 8.18C8.48 8.18 8.19 8.25 7.94 8.53C7.69 8.81 7.04 9.51 7.04 10.93C7.04 12.35 8.09 13.71 8.24 13.92C8.39 14.13 10.1 16.88 12.7 16.03C14.16 15.54 14.62 14.56 14.74 14.12C14.86 13.68 14.86 13.3 14.81 13.2C14.76 13.1 14.61 13.05 14.41 12.95C14.21 12.85 13.31 12.4 13.13 12.34C12.95 12.28 12.81 12.25 12.67 12.45C12.53 12.65 12.13 13.15 12.01 13.29C11.89 13.43 11.77 13.45 11.57 13.35C11.37 13.25 10.78 13.04 10.09 12.42C9.55 11.95 9.18 11.36 9.06 11.16C8.94 10.96 9.05 10.84 9.15 10.74C9.24 10.65 9.35 10.5 9.45 10.38C9.55 10.26 9.59 10.18 9.67 10.04C9.75 9.9 9.71 9.78 9.65 9.68C9.59 9.58 9.21 8.68 9.05 8.28C8.9 7.9 8.74 7.95 8.62 7.94C8.51 7.93 8.37 7.93 8.23 7.93C8.09 7.93 7.86 8.18 8.67 8.18Z" />
      </svg>
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
      className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcaf45] text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 z-40 flex items-center justify-center"
      aria-label="Lista de deseos"
    >
      <span className="text-2xl">❤️</span>
    </button>
  );
});

// ==================== TARJETA DE PRODUCTO ====================
const ProductCard = React.memo(({ product, onAddToCart, likedProducts, onToggleLike, onProductClick }) => {
  const isLiked = likedProducts.includes(product.id);
  const originalPrice = product.price;

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
      alert('¡Enlace copiado! Comparte este producto.');
    }).catch(() => {
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
    <div className="product-card bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer" onClick={handleCardClick}>
      <div className="aspect-square bg-[#fafaf9] relative overflow-hidden p-4">
        <OptimizedImage
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />
        
        <div className="absolute top-2 right-2 flex flex-col space-y-1">
          <button onClick={handleLikeClick} className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition">
            <span className={`text-lg ${isLiked ? 'text-red-500' : 'text-gray-400'}`}>
              {isLiked ? '❤️' : '🤍'}
            </span>
          </button>
          <button onClick={handleShare} className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition">
            <span className="text-lg text-gray-600">🔗</span>
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-[#0f172a] text-sm mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs text-[#64748b] mb-2 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs px-3 py-1 bg-gray-100 text-[#334155] rounded-full font-medium flex items-center gap-1">
            {categories.find(c => c.id === product.category)?.icon} {categories.find(c => c.id === product.category)?.name}
          </span>
          <span className="text-lg font-bold text-[#10b981]">
            ${originalPrice.toFixed(2)} <span className="text-xs font-normal text-[#64748b]">USD</span>
          </span>
        </div>
        <button 
          onClick={handleAddToCart}
          className="w-full bg-[#10b981] text-white py-3 px-4 rounded-full text-sm font-semibold flex items-center justify-center space-x-2 hover:bg-[#059669] transition-all shadow-sm hover:shadow"
        >
          <span>🛒</span>
          <span>Añadir al carrito</span>
        </button>
      </div>
    </div>
  );
});

// ==================== MODAL DE PRODUCTO ====================
const ProductDetailModal = React.memo(({ isOpen, onClose, product, onAddToCart, likedProducts, onToggleLike }) => {
  if (!isOpen || !product) return null;

  const isLiked = likedProducts.includes(product.id);
  const categoryName = categories.find(c => c.id === product.category)?.name || 'Sin categoría';
  const categoryIcon = categories.find(c => c.id === product.category)?.icon || '📦';

  const handleShare = () => {
    if (product) {
      const shareUrl = generateShareableLink(product.id);
      
      if (navigator.share) {
        navigator.share({
          title: product.name,
          text: product.description,
          url: shareUrl,
        })
        .catch(console.error);
      } else {
        navigator.clipboard.writeText(shareUrl).then(() => {
          alert('¡Enlace copiado al portapapeles! Compártelo con quien quieras.');
        }).catch(() => {
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
      <div className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl">
        <div className="relative bg-[#fafaf9] p-6">
          <OptimizedImage
            src={product.image}
            alt={product.name}
            className="w-full h-auto max-h-[400px] object-contain"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition"
          >
            <span className="text-lg text-gray-600">✕</span>
          </button>
          <button 
            onClick={() => onToggleLike(product.id)}
            className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition"
          >
            <span className={`text-lg ${isLiked ? 'text-red-500' : 'text-gray-400'}`}>
              {isLiked ? '❤️' : '🤍'}
            </span>
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-[#0f172a] mb-2">{product.name}</h2>
              <span className="inline-block px-3 py-1 bg-gray-100 text-[#334155] rounded-full text-xs font-medium flex items-center gap-1 w-fit">
                {categoryIcon} {categoryName}
              </span>
            </div>
            <div className="text-right ml-4">
              <span className="text-2xl font-bold text-[#10b981]">
                ${product.price.toFixed(2)}
              </span>
              <span className="block text-xs text-[#64748b]">USD</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#0f172a] mb-2 flex items-center gap-1">
              <span>📝</span> Descripción
            </h3>
            <p className="text-[#475569] leading-relaxed">{product.description}</p>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="w-full bg-[#10b981] text-white py-3 rounded-full font-semibold hover:bg-[#059669] transition-all shadow-sm hover:shadow flex items-center justify-center gap-2"
            >
              <span>🛒</span> Añadir al carrito
            </button>
            
            <button
              onClick={handleShare}
              className="w-full bg-white text-[#10b981] border-2 border-[#10b981] py-3 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-[#f0fdf4] transition-all"
            >
              <span>🔗</span>
              <span>Compartir Producto</span>
            </button>
            
            <button
              onClick={onClose}
              className="w-full bg-gray-100 text-[#0f172a] py-3 rounded-full font-medium hover:bg-gray-200 transition-all"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

// ==================== FOOTER ====================
const Footer = React.memo(() => {
  return (
    <footer className="bg-[#0f172a] text-white mt-12 rounded-t-3xl px-6 py-10">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-full flex items-center justify-center shadow-lg">
            <span className="text-xl text-white">🛒</span>
          </div>
          <h3 className="text-2xl font-bold text-white">TuDespensa.25</h3>
        </div>
        <p className="text-gray-300 text-sm mb-2">Ayuda a tu familia desde la distancia</p>
        <p className="text-gray-400 text-xs">Nosotros nos encargamos del resto</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-sm mb-8">
        <div className="bg-white/5 rounded-2xl p-4">
          <span className="text-3xl text-[#10b981] mb-2 block">🚚</span>
          <h4 className="font-semibold text-[#10b981] mb-1">Entrega rápida</h4>
          <p className="text-gray-300 text-xs">24-48 horas</p>
        </div>
        <div className="bg-white/5 rounded-2xl p-4">
          <span className="text-3xl text-[#10b981] mb-2 block">🛡️</span>
          <h4 className="font-semibold text-[#10b981] mb-1">Pago seguro</h4>
          <p className="text-gray-300 text-xs">Transferencia Zelle</p>
        </div>
        <div className="bg-white/5 rounded-2xl p-4">
          <span className="text-3xl text-[#10b981] mb-2 block">⭐</span>
          <h4 className="font-semibold text-[#10b981] mb-1">Soporte</h4>
          <p className="text-gray-300 text-xs">WhatsApp directo</p>
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-6 text-center">
        <p className="text-xs text-gray-400">
          © 2025 TuDespensa.25. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
});

// ==================== GRID DE PRODUCTOS ====================
const ProductGrid = React.memo(({ products, onAddToCart, likedProducts, onToggleLike, onProductClick }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <span className="text-3xl text-gray-400">🔍</span>
        </div>
        <p className="text-[#475569] text-lg">No se encontraron productos</p>
        <p className="text-[#64748b] text-sm mt-1">Intenta con otros términos de búsqueda o selecciona otro municipio</p>
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

// ==================== FAQ ====================
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
      answer: "🚚 **Entregas en menos de 48 horas**, y la mayoría de los pedidos llegan el mismo día. Esto aplica en toda la provincia Artemisa."
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
      answer: "🎯 **Promociones Activas:**\n\n🔥 **Combos Especiales:** 3 días a la semana mostramos combos con descuentos\n💥 **Zona Roja:** Productos con descuentos mayores para aprovechar\n📦 **Envío Gratis:** En municipios seleccionados a partir de 30 USD"
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
    <section id="faq" className="px-4 py-10 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl text-white">❓</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#0f172a]">Preguntas Frecuentes</h2>
              <p className="text-[#64748b] mt-1">Todo lo que necesitas saber sobre TuDespensa.25</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md bg-white"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#0f172a] text-sm sm:text-base pr-4">
                  {item.question}
                </span>
                <span className={`transform transition-transform duration-300 flex-shrink-0 text-[#10b981] text-lg ${
                  openItems.includes(index) ? 'rotate-180' : ''
                }`}>
                  ▼
                </span>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <div className="text-[#475569] text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-[#10b981] to-[#059669] rounded-3xl p-8 text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-3">¿No encontraste tu respuesta?</h3>
          <p className="text-white text-opacity-90 mb-6 text-lg">
            Estamos aquí para ayudarte personalmente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5354066204"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#10b981] px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-3 hover:scale-105 transition-transform shadow-lg"
            >
              <span className="text-xl">💬</span>
              <span className="text-lg">WhatsApp Directo</span>
            </a>
            <a 
              href="tel:+5354066204"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-3 hover:bg-white hover:text-[#10b981] transition-all"
            >
              <span className="text-xl">📞</span>
              <span className="text-lg">Llamar Ahora</span>
            </a>
          </div>
          <p className="text-white text-opacity-80 mt-4 text-sm">
            Horario de atención: 24/7 • Respuesta inmediata
          </p>
        </div>
      </div>
    </section>
  );
});

// ==================== ERROR BOUNDARY ====================
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
              className="px-6 py-2 bg-[#10b981] text-white rounded-full"
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

// ==================== MAIN APP ====================
function App() {
  const [selectedCategory, setSelectedCategory] = React.useState('todos');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedMunicipality, setSelectedMunicipality] = React.useState(1);
  const [cart, setCart] = React.useState([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [likedProducts, setLikedProducts] = React.useState([]);
  const [notification, setNotification] = React.useState({ message: '', isVisible: false });
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [showMunicipalityModal, setShowMunicipalityModal] = React.useState(true);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  React.useEffect(() => {
    const productFromURL = getProductFromURL();
    if (productFromURL) {
      setSelectedProduct(productFromURL);
      setSelectedCategory(productFromURL.category);
    }
  }, []);

  const filteredProducts = React.useMemo(() => {
    if (!selectedMunicipality) return [];
    
    let filtered = productData;
    
    filtered = filtered.filter(product => 
      isProductAvailable(product, selectedMunicipality)
    );
    
    if (selectedCategory !== 'todos') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
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
    
    if (discountCode && discountPercentage > 0) {
      orderMessage += `\n*🎫 DESCUENTO APLICADO:*\n`;
      orderMessage += `Código: ${discountCode}\n`;
      orderMessage += `Descuento: ${discountPercentage}%\n`;
      orderMessage += `💵 Ahorro: $${discountAmount.toFixed(2)} USD\n\n`;
    }
    
    orderMessage += `\n*PRODUCTOS SOLICITADOS:*\n`;
    let subtotal = 0;
    
    cart.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      subtotal += itemTotal;
      
      orderMessage += `${index + 1}. ${item.name}\n`;
      orderMessage += `   💰 Precio: $${item.price.toFixed(2)} USD\n`;
      orderMessage += `   📦 Cantidad: ${item.quantity}\n`;
      orderMessage += `   💵 Subtotal: $${itemTotal.toFixed(2)} USD\n\n`;
    });
    
    orderMessage += `*RESUMEN DE PAGO:*\n`;
    
    if (discountPercentage > 0) {
      orderMessage += `🛒 Subtotal: $${subtotal.toFixed(2)} USD\n`;
      orderMessage += `🎫 Descuento (${discountPercentage}%): -$${discountAmount.toFixed(2)} USD\n`;
      const finalTotal = subtotal - discountAmount;
      orderMessage += `💰 *TOTAL FINAL: $${finalTotal.toFixed(2)} USD*\n\n`;
    } else {
      orderMessage += `💰 *TOTAL: $${subtotal.toFixed(2)} USD*\n\n`;
    }
    
    orderMessage += `*DATOS DEL VENDEDOR:*\n`;
    orderMessage += `🏪 Tienda: TuDespensa.25\n`;
    orderMessage += `📞 Contacto: +5354066204\n`;
    orderMessage += `📧 Email: ventas@tudespensa25.com\n`;
    
    orderMessage += `\n*DATOS DE ENTREGA:*\n`;
    orderMessage += `🚚 Entrega a domicilio\n`;
    orderMessage += `⏰ Tiempo estimado: 24 a 48 horas\n`;
    orderMessage += `💳 Pago: Transferencia Zelle\n`;

    const whatsappUrl = `https://wa.me/5354066204?text=${encodeURIComponent(orderMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    setCart([]);
    setIsCartOpen(false);
  };

  const getTotalCartItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <Header 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        selectedMunicipality={selectedMunicipality}
        setSelectedMunicipality={setSelectedMunicipality}
        cartItems={getTotalCartItems()}
        onCartClick={() => setIsCartOpen(true)}
        onMunicipalityClick={() => setShowMunicipalityModal(true)}
      />
      
      <SocialMediaLinks />
      
      <main className="pb-20">
        <CategoryGrid 
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
        <div className="px-4 mt-2 products-section">
          <h2 className="text-xl font-bold text-[#0f172a] mb-4">
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