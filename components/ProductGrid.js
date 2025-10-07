function ProductGrid({ products }) {
  try {
    if (products.length === 0) {
      return (
        <div className="text-center py-12" data-name="empty-state" data-file="components/ProductGrid.js">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <div className="icon-search text-2xl text-gray-400"></div>
          </div>
          <p className="text-[var(--text-secondary)] text-lg">No se encontraron productos</p>
          <p className="text-[var(--text-secondary)] text-sm mt-1">Intenta con otros términos de búsqueda</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4" data-name="product-grid" data-file="components/ProductGrid.js">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  } catch (error) {
    console.error('ProductGrid component error:', error);
    return null;
  }
}