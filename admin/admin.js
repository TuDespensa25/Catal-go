// admin/admin.js
// ============================================
// TuDespensa.25 - Panel de Administración
// Versión Responsive para Móvil
// ============================================

// --------------------------------------------
// 1. CONFIGURACIÓN
// --------------------------------------------
const ADMIN_CONFIG = {
    USERS: [
        { username: 'admin', password: 'admin123', role: 'superadmin' },
        { username: 'editor', password: 'editor123', role: 'editor' }
    ],
    STORAGE_KEY: 'tudespensa_products'
};

// --------------------------------------------
// 2. UTILIDADES
// --------------------------------------------
const StorageService = {
    // Cargar productos desde localStorage o usar los originales
    loadProducts: () => {
        const saved = localStorage.getItem(ADMIN_CONFIG.STORAGE_KEY);
        if (saved) {
            return JSON.parse(saved);
        }
        // Guardar los productos originales en localStorage
        localStorage.setItem(ADMIN_CONFIG.STORAGE_KEY, JSON.stringify(productData));
        return [...productData];
    },
    
    // Guardar productos
    saveProducts: (products) => {
        localStorage.setItem(ADMIN_CONFIG.STORAGE_KEY, JSON.stringify(products));
        // También actualizar la variable global para que la app principal la use
        window.productData = products;
    },
    
    // Reset a productos originales (solo superadmin)
    resetToOriginal: () => {
        localStorage.setItem(ADMIN_CONFIG.STORAGE_KEY, JSON.stringify(productData));
        window.productData = productData;
        return [...productData];
    }
};

// --------------------------------------------
// 3. COMPONENTE DE LOGIN
// --------------------------------------------
const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const user = ADMIN_CONFIG.USERS.find(
            u => u.username === username && u.password === password
        );
        
        if (user) {
            onLogin(user);
        } else {
            setError('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 sm:p-8">
                <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="icon-shield text-3xl text-white"></div>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">Panel de Administración</h1>
                    <p className="text-gray-600 mt-2">TuDespensa.25</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Usuario
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                            placeholder="Ingresa tu usuario"
                            required
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                            placeholder="Ingresa tu contraseña"
                            required
                        />
                    </div>
                    
                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                            {error}
                        </div>
                    )}
                    
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all text-base min-h-[44px]"
                    >
                        Iniciar Sesión
                    </button>
                </form>
                
                <div className="mt-6 text-center text-sm text-gray-500">
                    <p>Usuarios de prueba:</p>
                    <p>admin / admin123 (todos los permisos)</p>
                    <p>editor / editor123 (solo editar)</p>
                </div>
            </div>
        </div>
    );
};

// --------------------------------------------
// 4. MODAL DE EDICIÓN DE PRODUCTO
// --------------------------------------------
const ProductEditModal = ({ isOpen, onClose, product, onSave, categories, municipalities }) => {
    const [formData, setFormData] = React.useState({
        id: product?.id || Date.now(),
        name: product?.name || '',
        category: product?.category || categories[0]?.id || '',
        description: product?.description || '',
        price: product?.price || 0,
        image: product?.image || '/images/default.png',
        availableIn: product?.availableIn || []
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    const toggleMunicipality = (municipalityId) => {
        setFormData(prev => ({
            ...prev,
            availableIn: prev.availableIn.includes(municipalityId)
                ? prev.availableIn.filter(id => id !== municipalityId)
                : [...prev.availableIn, municipalityId]
        }));
    };

    const selectAllMunicipalities = () => {
        setFormData(prev => ({
            ...prev,
            availableIn: municipalities.map(m => m.id)
        }));
    };

    const clearAllMunicipalities = () => {
        setFormData(prev => ({
            ...prev,
            availableIn: []
        }));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-white border-b p-4 sm:p-6 flex items-center justify-between">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                        {product ? 'Editar Producto' : 'Nuevo Producto'}
                    </h2>
                    <button 
                        onClick={onClose} 
                        className="p-2 hover:bg-gray-100 rounded-full min-h-[44px] min-w-[44px] flex items-center justify-center"
                        aria-label="Cerrar"
                    >
                        <div className="icon-x text-xl"></div>
                    </button>
                </div>
                
                <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-6">
                    {/* Datos básicos */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Nombre del Producto *
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="admin-input text-base"
                                required
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Categoría *
                            </label>
                            <select
                                value={formData.category}
                                onChange={(e) => setFormData({...formData, category: e.target.value})}
                                className="admin-select text-base"
                                required
                            >
                                {categories.map(cat => (
                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                ))}
                            </select>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Precio (USD) *
                            </label>
                            <input
                                type="number"
                                step="0.01"
                                min="0"
                                value={formData.price}
                                onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})}
                                className="admin-input text-base"
                                required
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                URL de la Imagen
                            </label>
                            <input
                                type="text"
                                value={formData.image}
                                onChange={(e) => setFormData({...formData, image: e.target.value})}
                                className="admin-input text-base"
                                placeholder="/images/default.png"
                            />
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Descripción
                        </label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({...formData, description: e.target.value})}
                            rows="3"
                            className="admin-input text-base"
                            placeholder="Descripción del producto"
                        />
                    </div>
                    
                    {/* Selección de municipios */}
                    <div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Disponible en municipios:
                            </label>
                            <div className="space-x-2">
                                <button
                                    type="button"
                                    onClick={selectAllMunicipalities}
                                    className="text-sm text-blue-600 hover:text-blue-800 p-2 min-h-[44px]"
                                >
                                    Seleccionar todos
                                </button>
                                <span className="text-gray-300">|</span>
                                <button
                                    type="button"
                                    onClick={clearAllMunicipalities}
                                    className="text-sm text-red-600 hover:text-red-800 p-2 min-h-[44px]"
                                >
                                    Limpiar
                                </button>
                            </div>
                        </div>
                        
                        <div className="municipality-grid">
                            {municipalities.map(muni => (
                                <div
                                    key={muni.id}
                                    onClick={() => toggleMunicipality(muni.id)}
                                    className={`municipality-item ${formData.availableIn.includes(muni.id) ? 'selected' : ''}`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={formData.availableIn.includes(muni.id)}
                                        onChange={() => {}}
                                        className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"
                                    />
                                    <span className="text-sm sm:text-base">{muni.name.split(', ')[1]}</span>
                                </div>
                            ))}
                        </div>
                        
                        <p className="text-xs text-gray-500 mt-2">
                            {formData.availableIn.length} municipios seleccionados
                        </p>
                    </div>
                    
                    {/* Vista previa */}
                    {formData.image && (
                        <div className="border rounded-lg p-4 bg-gray-50">
                            <h3 className="text-sm font-medium text-gray-700 mb-2">Vista previa:</h3>
                            <div className="flex items-center space-x-4">
                                <img
                                    src={formData.image}
                                    alt="Vista previa"
                                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain bg-white rounded border"
                                    onError={(e) => {
                                        e.target.src = '/images/default.png';
                                    }}
                                />
                                <div>
                                    <p className="font-medium text-sm sm:text-base">{formData.name || 'Nombre del producto'}</p>
                                    <p className="text-sm text-gray-600">${formData.price.toFixed(2)} USD</p>
                                    <p className="text-xs text-gray-500">{formData.availableIn.length} municipios</p>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3 pt-4 border-t">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 min-h-[44px]"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 min-h-[44px]"
                        >
                            {product ? 'Actualizar' : 'Crear'} Producto
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// --------------------------------------------
// 5. COMPONENTE PRINCIPAL DEL ADMIN
// --------------------------------------------
const AdminApp = () => {
    const [user, setUser] = React.useState(null);
    const [products, setProducts] = React.useState([]);
    const [filteredProducts, setFilteredProducts] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [selectedCategory, setSelectedCategory] = React.useState('todos');
    const [editingProduct, setEditingProduct] = React.useState(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = React.useState(null);
    const [menuOpen, setMenuOpen] = React.useState(false);

    // Cargar productos al iniciar
    React.useEffect(() => {
        setProducts(StorageService.loadProducts());
    }, []);

    // Filtrar productos
    React.useEffect(() => {
        let filtered = [...products];
        
        if (selectedCategory !== 'todos') {
            filtered = filtered.filter(p => p.category === selectedCategory);
        }
        
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(p => 
                p.name.toLowerCase().includes(term) ||
                p.description?.toLowerCase().includes(term)
            );
        }
        
        setFilteredProducts(filtered);
    }, [products, searchTerm, selectedCategory]);

    // Cerrar menú al cambiar de categoría en móvil
    React.useEffect(() => {
        if (window.innerWidth <= 768) {
            setMenuOpen(false);
        }
    }, [selectedCategory]);

    // Guardar producto (nuevo o editado)
    const handleSaveProduct = (productData) => {
        let newProducts;
        
        if (editingProduct) {
            // Editar existente
            newProducts = products.map(p => 
                p.id === editingProduct.id ? productData : p
            );
        } else {
            // Crear nuevo
            newProducts = [...products, productData];
        }
        
        setProducts(newProducts);
        StorageService.saveProducts(newProducts);
        setEditingProduct(null);
    };

    // Eliminar producto
    const handleDeleteProduct = (productId) => {
        const newProducts = products.filter(p => p.id !== productId);
        setProducts(newProducts);
        StorageService.saveProducts(newProducts);
        setShowDeleteConfirm(null);
    };

    // Reset a productos originales (solo superadmin)
    const handleReset = () => {
        if (user.role !== 'superadmin') {
            alert('No tienes permisos para realizar esta acción');
            return;
        }
        if (confirm('¿Estás seguro? Se perderán todos los cambios no guardados.')) {
            const original = StorageService.resetToOriginal();
            setProducts(original);
        }
    };

    if (!user) {
        return <LoginForm onLogin={setUser} />;
    }

    const isSuperAdmin = user.role === 'superadmin';

    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-100">
            {/* Sidebar con menú hamburguesa */}
            <div className={`admin-sidebar text-white flex flex-col ${menuOpen ? 'menu-open' : ''}`}>
                <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                                <div className="icon-shopping-cart text-xl"></div>
                            </div>
                            <div>
                                <h2 className="font-bold text-base sm:text-lg">TuDespensa.25</h2>
                                <p className="text-xs opacity-75">Admin Panel</p>
                            </div>
                        </div>
                        <button 
                            className="menu-toggle" 
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        >
                            {menuOpen ? '✕' : '☰'}
                        </button>
                    </div>
                    
                    <div className="space-y-2 mt-4">
                        <div className="flex items-center space-x-3 p-3 bg-white bg-opacity-10 rounded-lg">
                            <div className="icon-user text-lg"></div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">{user.username}</p>
                                <p className="text-xs opacity-75 truncate">{user.role === 'superadmin' ? 'Administrador' : 'Editor'}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
                    <div className="space-y-2">
                        <button
                            onClick={() => {
                                setSelectedCategory('todos');
                                setMenuOpen(false);
                            }}
                            className={`w-full text-left p-3 rounded-lg transition text-sm sm:text-base ${
                                selectedCategory === 'todos' 
                                    ? 'bg-white bg-opacity-20' 
                                    : 'hover:bg-white hover:bg-opacity-10'
                            }`}
                        >
                            📦 Todos los productos ({products.length})
                        </button>
                        
                        {categories.map(cat => {
                            const count = products.filter(p => p.category === cat.id).length;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => {
                                        setSelectedCategory(cat.id);
                                        setMenuOpen(false);
                                    }}
                                    className={`w-full text-left p-3 rounded-lg transition text-sm sm:text-base ${
                                        selectedCategory === cat.id 
                                            ? 'bg-white bg-opacity-20' 
                                            : 'hover:bg-white hover:bg-opacity-10'
                                    }`}
                                >
                                    <span className="mr-2">{cat.icon.replace('icon-', '')}</span>
                                    <span className="truncate">{cat.name}</span>
                                    <span className="ml-2 text-xs opacity-75">({count})</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
                
                <div className="p-4 sm:p-6 border-t border-white border-opacity-10">
                    <button
                        onClick={() => setUser(null)}
                        className="w-full p-3 text-left hover:bg-white hover:bg-opacity-10 rounded-lg transition text-sm sm:text-base flex items-center space-x-2"
                    >
                        <div className="icon-log-out"></div>
                        <span>Cerrar sesión</span>
                    </button>
                </div>
            </div>
            
            {/* Contenido principal */}
            <div className="flex-1 overflow-auto">
                <div className="p-4 sm:p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                        <div className="w-full sm:w-auto">
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Productos</h1>
                            <p className="text-gray-600 mt-1 text-sm sm:text-base">
                                {filteredProducts.length} productos encontrados
                                {selectedCategory !== 'todos' && ` en ${categories.find(c => c.id === selectedCategory)?.name}`}
                            </p>
                        </div>
                        
                        <div className="flex space-x-3 w-full sm:w-auto">
                            {isSuperAdmin && (
                                <button
                                    onClick={handleReset}
                                    className="flex-1 sm:flex-none px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm min-h-[44px]"
                                >
                                    Resetear
                                </button>
                            )}
                            <button
                                onClick={() => {
                                    setEditingProduct(null);
                                    setIsModalOpen(true);
                                }}
                                className="flex-1 sm:flex-none px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2 text-sm min-h-[44px]"
                            >
                                <div className="icon-plus-circle text-lg"></div>
                                <span>Nuevo Producto</span>
                            </button>
                        </div>
                    </div>
                    
                    {/* Búsqueda */}
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Buscar productos por nombre o descripción..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                        />
                    </div>
                    
                    {/* Tabla de productos */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th className="px-4 sm:px-6 py-3">Imagen</th>
                                        <th className="hidden md:table-cell px-4 sm:px-6 py-3">ID</th>
                                        <th className="px-4 sm:px-6 py-3">Nombre</th>
                                        <th className="px-4 sm:px-6 py-3">Categoría</th>
                                        <th className="px-4 sm:px-6 py-3">Precio</th>
                                        <th className="px-4 sm:px-6 py-3">Municipios</th>
                                        <th className="px-4 sm:px-6 py-3">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredProducts.map(product => (
                                        <tr key={product.id}>
                                            <td className="px-4 sm:px-6 py-4">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                                                    onError={(e) => {
                                                        e.target.src = '/images/default.png';
                                                    }}
                                                />
                                            </td>
                                            <td className="hidden md:table-cell px-4 sm:px-6 py-4 font-mono text-sm">
                                                #{product.id}
                                            </td>
                                            <td className="px-4 sm:px-6 py-4">
                                                <div className="font-medium text-sm sm:text-base">{product.name}</div>
                                                <div className="text-xs text-gray-500 line-clamp-1 sm:line-clamp-2">
                                                    {product.description}
                                                </div>
                                            </td>
                                            <td className="px-4 sm:px-6 py-4">
                                                <span className="admin-badge admin-badge-success text-xs sm:text-sm">
                                                    {categories.find(c => c.id === product.category)?.name || product.category}
                                                </span>
                                            </td>
                                            <td className="px-4 sm:px-6 py-4 font-medium text-sm sm:text-base">
                                                ${product.price.toFixed(2)}
                                            </td>
                                            <td className="px-4 sm:px-6 py-4">
                                                <span className="admin-badge admin-badge-info text-xs sm:text-sm">
                                                    {product.availableIn.length} municipios
                                                </span>
                                            </td>
                                            <td className="px-4 sm:px-6 py-4">
                                                <div className="flex items-center space-x-2">
                                                    <button
                                                        onClick={() => {
                                                            setEditingProduct(product);
                                                            setIsModalOpen(true);
                                                        }}
                                                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center"
                                                        title="Editar producto"
                                                    >
                                                        <div className="icon-edit text-lg"></div>
                                                    </button>
                                                    {isSuperAdmin && (
                                                        <button
                                                            onClick={() => setShowDeleteConfirm(product.id)}
                                                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center"
                                                            title="Eliminar producto"
                                                        >
                                                            <div className="icon-trash text-lg"></div>
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        
                        {filteredProducts.length === 0 && (
                            <div className="text-center py-12">
                                <div className="icon-package text-4xl text-gray-400 mb-4"></div>
                                <p className="text-gray-600">No se encontraron productos</p>
                                <button
                                    onClick={() => {
                                        setSearchTerm('');
                                        setSelectedCategory('todos');
                                    }}
                                    className="mt-4 text-blue-600 hover:text-blue-800 p-3 min-h-[44px]"
                                >
                                    Limpiar filtros
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            {/* Modal de edición */}
            <ProductEditModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setEditingProduct(null);
                }}
                product={editingProduct}
                onSave={handleSaveProduct}
                categories={categories}
                municipalities={municipalities}
            />
            
            {/* Confirmación de eliminación */}
            {showDeleteConfirm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl max-w-md w-full p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Confirmar eliminación</h3>
                        <p className="text-gray-600 mb-6">
                            ¿Estás seguro de que deseas eliminar este producto? Esta acción no se puede deshacer.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
                            <button
                                onClick={() => setShowDeleteConfirm(null)}
                                className="px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 min-h-[44px]"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={() => handleDeleteProduct(showDeleteConfirm)}
                                className="px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 min-h-[44px]"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// --------------------------------------------
// 6. RENDERIZADO
// --------------------------------------------
const root = ReactDOM.createRoot(document.getElementById('admin-root'));
root.render(<AdminApp />);