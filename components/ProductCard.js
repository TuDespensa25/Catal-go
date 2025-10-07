function ProductCard({ product }) {
  try {
    return (
      <div className="product-card" data-name="product-card" data-file="components/ProductCard.js">
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
  } catch (error) {
    console.error('ProductCard component error:', error);
    return null;
  }
}