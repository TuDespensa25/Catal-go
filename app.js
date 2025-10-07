// Data
const categories = [
  { id: 'todos', name: 'Todos', icon: 'icon-grid-3x3', backgroundImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop' },
  { id: 'carnicos', name: 'Cárnicos', icon: 'icon-beef', backgroundImage: 'https://images.unsplash.com/photo-1588347818431-13aa3d47f504?w=300&h=200&fit=crop' },
  { id: 'lacteos', name: 'Lácteos', icon: 'icon-milk', backgroundImage: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=200&fit=crop' },
  { id: 'liquidos', name: 'Líquidos', icon: 'icon-glass-water', backgroundImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop' },
  { id: 'agro', name: 'Agro', icon: 'icon-wheat', backgroundImage: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop' },
  { id: 'confiteria', name: 'Confitería', icon: 'icon-candy', backgroundImage: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=300&h=200&fit=crop' },
  { id: 'hogar', name: 'Hogar', icon: 'icon-home', backgroundImage: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=200&fit=crop' },
  { id: 'electrodomesticos', name: 'Electrodomésticos', icon: 'icon-zap', backgroundImage: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=300&h=200&fit=crop' }
];

const productData = [
  { id: 1, name: 'Carne de Res Premium', category: 'carnicos', description: 'Corte selecto de alta calidad', image: 'https://images.unsplash.com/photo-1588347818431-13aa3d47f504?w=400&h=400&fit=crop' },
  { id: 2, name: 'Pollo Entero Fresco', category: 'carnicos', description: 'Pollo fresco de granja', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=400&fit=crop' },
  { id: 3, name: 'Cerdo Magro', category: 'carnicos', description: 'Corte magro sin grasa', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=400&fit=crop' },
  { id: 4, name: 'Leche Entera 1L', category: 'lacteos', description: 'Leche fresca pasteurizada', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop' },
  { id: 5, name: 'Queso Fresco', category: 'lacteos', description: 'Queso artesanal cremoso', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=400&fit=crop' },
  { id: 6, name: 'Yogurt Natural', category: 'lacteos', description: 'Yogurt sin azúcar añadida', image: 'https://images.unsplash.com/photo-1571212515416-ffa5dccf5f1a?w=400&h=400&fit=crop' },
  { id: 7, name: 'Agua Mineral 500ml', category: 'liquidos', description: 'Agua purificada natural', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop' },
  { id: 8, name: 'Jugo de Naranja', category: 'liquidos', description: 'Jugo natural 100%', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=400&fit=crop' },
  { id: 9, name: 'Arroz Blanco 1kg', category: 'agro', description: 'Grano largo premium', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop' },
  { id: 10, name: 'Frijoles Negros', category: 'agro', description: 'Frijoles secos seleccionados', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop' },
  { id: 11, name: 'Chocolate Artesanal', category: 'confiteria', description: 'Chocolate 70% cacao', image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&h=400&fit=crop' },
  { id: 12, name: 'Galletas de Avena', category: 'confiteria', description: 'Galletas caseras integrales', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop' },
  { id: 13, name: 'Detergente Líquido', category: 'hogar', description: 'Fórmula concentrada', image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop' },
  { id: 14, name: 'Papel Higiénico 4 rollos', category: 'hogar', description: 'Suave y resistente', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop' },
  { id: 15, name: 'Licuadora 3 velocidades', category: 'electrodomesticos', description: 'Potente motor 600W', image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&h=400&fit=crop' },
  { id: 16, name: 'Tostadora 2 panes', category: 'electrodomesticos', description: 'Control de temperatura', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop' }
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
          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <div className="icon-menu text-xl text-white"></div>
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
            <div className="absolute inset-0 bg-white bg-opacity-85"></div>
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
          <div className="w-6 h-6 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-sm">
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