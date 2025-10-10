// Data
const categories = [
  { id: 'carnicos', name: 'Cárnicos y embutidos', icon: 'icon-beef', backgroundImage: '/images/carnicos.png' },
  { id: 'cereales', name: 'Cereales, pastas y granos', icon: 'icon-wheat', backgroundImage: '/images/cereales.png' },
  { id: 'lacteos', name: 'Lácteos y huevos', icon: 'icon-milk', backgroundImage: '/images/lacteos.png' },
  { id: 'conserva', name: 'Conserva y enlatados', icon: 'icon-can', backgroundImage: '/images/conserva.png' },
  { id: 'mercado', name: 'Mercado', icon: 'icon-basket', backgroundImage: '/images/mercado.png' },
  { id: 'aseo', name: 'Aseo', icon: 'icon-broom', backgroundImage: '/images/aseo.png' }
];

const productData = [
  // Cárnicos y embutidos
  { id: 1, name: 'Pollo caja de 40 lb 4 paquetes de 10 lb', category: 'carnicos', description: 'Caja de 40 lb de pollo', image: '/images/pollo_caja.png' },
  { id: 2, name: 'Pollo paquete de 10 lb', category: 'carnicos', description: 'Paquete de 10 lb de pollo', image: '/images/pollo10lb.png' },
  { id: 3, name: 'Pechuga paquete de 2 kg', category: 'carnicos', description: 'Pechuga de pollo 2 kg', image: '/images/pechuga2kg.png' },
  { id: 4, name: 'Bandeja de 2 lb de bistec pechuga', category: 'carnicos', description: 'Bistec de pechuga 2 lb', image: '/images/pollo_caja.png' },
  { id: 5, name: 'Chuleta de lomo deshuesado 2 lb', category: 'carnicos', description: 'Chuleta de lomo deshuesado', image: '/images/chuletalomo.png' },
  { id: 6, name: 'Masas de cerdo 2 lb', category: 'carnicos', description: 'Masas de cerdo 2 lb', image: '/images/masas.png' },
  { id: 7, name: 'Bistec de cerdo 2 lb', category: 'carnicos', description: 'Bistec de cerdo 2 lb', image: '/images/pollo_caja.png' },
  { id: 8, name: 'Lomo ahumado 2 lb lasqueado', category: 'carnicos', description: 'Lomo ahumado lasqueado', image: '/images/ahumadolasqueado.png' },
  { id: 9, name: 'Lomo ahumado importado 2 lb', category: 'carnicos', description: 'Lomo ahumado deshuesado', image: '/images/pollo_caja.png' },
  { id: 10, name: 'Picadillo 400 gr de pollo', category: 'carnicos', description: 'Picadillo de pollo 400 gr', image: '/images/picadillo.png' },
  { id: 11, name: 'Hamburguesas mixtas de pollo y cerdo', category: 'carnicos', description: 'Hamburguesas mixtas de pollo y cerdo', image: '/images/hamburguesas.png' },
 /* { id: 12, name: 'Croquetas de chorizo 10 uds', category: 'carnicos', description: 'Croquetas de chorizo 10 uds', image: '/images/pollo_caja.png' },*/
  { id: 13, name: 'Mortadella clásica', category: 'carnicos', description: 'Mortadella clásica', image: '/images/mortclasica.png' },
  { id: 14, name: 'Mortadela de queso', category: 'carnicos', description: 'Mortadella de queso', image: '/images/mortqueso.png' },
  { id: 15, name: 'Mortadela de aceituna', category: 'carnicos', description: 'Mortadella con aceituna', image: '/images/mortaceit.png' },
  { id: 16, name: 'Mortadela de paprika', category: 'carnicos', description: 'Mortadella de paprika', image: '/images/pollo_caja.png' },
  { id: 17, name: 'Hígado de pollo 1 kg', category: 'carnicos', description: 'Hígado de pollo 1 kg', image: '/images/higado.png' },
  { id: 18, name: 'Salchichas', category: 'carnicos', description: 'Salchichas', image: '/images/salchichas.png' },

  // Lácteos y Huevos
  { id: 19, name: 'Leche entera 1 kg', category: 'lacteos', description: 'Leche entera 1 kg', image: '/images/pollo_caja.png' },
  { id: 20, name: 'Cartón de huevos', category: 'lacteos', description: 'Cartón de huevos', image: '/images/pollo_caja.png' },
  { id: 21, name: 'Yogurt de fresa 1 L', category: 'lacteos', description: 'Yogurt de fresa 1 L', image: '/images/pollo_caja.png'   },
  { id: 22, name: 'Leche condensada de cajita', category: 'lacteos', description: 'Leche condensada de cajita', image: '/images/cajitaleche.png' },
  { id: 23, name: 'Leche condensada lata', category: 'lacteos', description: 'Leche condensada lata', image: '/images/nezkaleche.png' },

  // Cereales, Pastas y Granos
  { id: 24, name: 'Frijol negro 1 lb', category: 'cereales', description: 'Frijol negro 1 lb', image: '/images/pollo_caja.png' },
  { id: 25, name: 'Arroz', category: 'cereales', description: 'Arroz', image: '/images/pollo_caja.png' },
  { id: 26, name: 'Sal 1 lb', category: 'cereales', description: 'Sal 1 lb', image: '/images/pollo_caja.png' },
  { id: 27, name: 'Azúcar 1 lb', category: 'cereales', description: 'Azúcar 1 lb', image: '/images/pollo_caja.png' },
  { id: 28, name: 'Spaguetis', category: 'cereales', description: 'Spaguetis', image: '/images/spaguetis.png' },
  { id: 29, name: 'Fideos', category: 'cereales', description: 'Fideos', image: '/images/pollo_caja.png' },
  { id: 30, name: 'Harina de trigo 1 kg', category: 'cereales', description: 'Harina de trigo 1 kg', image: '/images/pollo_caja.png' },

  // Conserva y Enlatados
  { id: 31, name: 'Pasta de tomate 400 gr', category: 'conserva', description: 'Pasta de tomate 400 gr', image: '/images/pasta400.png' },
  { id: 32, name: 'Pasta de tomate 800 gr', category: 'conserva', description: 'Pasta de tomate 800 gr', image: '/images/pollo_caja.png' },
  { id: 33, name: 'Leche condensada cocinada', category: 'conserva', description: 'Leche condensada cocinada', image: '/images/pollo_caja.png' },
  { id: 34, name: 'Mayonesa celorio', category: 'conserva', description: 'Mayonesa Celorio', image: '/images/pollo_caja.png' },

  // Mercado
  { id: 35, name: 'Aceite 1 L', category: 'mercado', description: 'Aceite 1 L', image: '/images/aceite1l.png' },
  { id: 36, name: 'Chocolate en polvo 500 gr', category: 'mercado', description: 'Chocolate en polvo 500 gr', image: '/images/pollo_caja.png' },
  { id: 37, name: 'Gelatina', category: 'mercado', description: 'Gelatina', image: '/images/pollo_caja.png' },

  // Aseo
  { id: 38, name: 'Papel higiénico', category: 'aseo', description: 'Papel higiénico', image: '/images/pollo_caja.png' },
  { id: 39, name: 'Jabones 8 uds 100 gr', category: 'aseo', description: 'Jabones 8 uds 100 gr', image: '/images/pollo_caja.png' },
];


// Components
function Header({ searchTerm, setSearchTerm }) {
  return (
    <header className="header-gradient text-white sticky top-0 z-50 shadow-lg">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <div className="icon-shopping-basket text-xl text-[var(--primary-color)]"></div>
            </div>
            <h1 className="text-xl font-bold">TuDespensa.25</h1>
          
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
}

function CategoryGrid({ selectedCategory, onCategorySelect }) {
  return (
    <section className="px-4 py-6 bg-white">
      <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Categorías</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`category-card ${selectedCategory === category.id ? 'ring-2 ring-[var(--primary-color)]' : ''}`}
            style={{
              backgroundImage: `url(${category.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-white bg-opacity-30"></div>
            <div className="relative z-10">
              <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${
                selectedCategory === category.id ? 'bg-[var(--primary-color)]' : 'bg-[var(--secondary-color)] bg-opacity-20'
              }`}>
                <div className={`${category.icon} text-xl ${
                  selectedCategory === category.id ? 'text-white' : 'text-[var(--secondary-color)]'
                }`}></div>
              </div>
              <p className={`text-sm font-medium ${
                selectedCategory === category.id ? 'text-[var(--primary-color)]' : 'text-[var(--text-primary)]'
              }`}>
                {category.name}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="aspect-square bg-gray-100 relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop';
          }}
        />
        <div className="absolute top-2 right-2">
          <div className="w-6 h-6 bg-white bg-opacity-30 rounded-full flex items-center justify-center shadow-sm">
            <div className="icon-heart text-sm text-gray-400"></div>
          </div>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-medium text-[var(--text-primary)] text-sm mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs text-[var(--text-secondary)] mb-2 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs px-2 py-1 bg-[var(--primary-color)] bg-opacity-10 text-[var(--primary-color)] rounded-full">
            {categories.find(c => c.id === product.category)?.name}
          </span>
          <button className="w-8 h-8 bg-[var(--secondary-color)] bg-opacity-10 rounded-full flex items-center justify-center">
            <div className="icon-plus text-sm text-[var(--secondary-color)]"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <div className="icon-search text-2xl text-gray-400"></div>
        </div>
        <p className="text-[var(--text-secondary)] text-lg">No se encontraron productos</p>
        <p className="text-[var(--text-secondary)] text-sm mt-1">Intenta con otros términos de búsqueda</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

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

  const filteredProducts = React.useMemo(() => {
    let products = selectedCategory === 'todos' 
      ? productData 
      : productData.filter(product => product.category === selectedCategory);
    
    if (searchTerm) {
      products = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return products;
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="pb-20">
        <CategoryGrid 
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
        <div className="px-4 mt-6">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
            {selectedCategory === 'todos' ? 'Todos los Productos' : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          <ProductGrid products={filteredProducts} />
        </div>
      </main>
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