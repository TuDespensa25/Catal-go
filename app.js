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

function App() {
  try {
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
      <div className="min-h-screen bg-gray-50" data-name="app" data-file="app.js">
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
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);