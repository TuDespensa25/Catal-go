function CategoryGrid({ selectedCategory, onCategorySelect }) {
  try {
    return (
      <section className="px-4 py-6 bg-white" data-name="category-grid" data-file="components/CategoryGrid.js">
        <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Categorías</h2>
        
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className={`category-card ${
                selectedCategory === category.id 
                  ? 'ring-2 ring-[var(--primary-color)] bg-[var(--primary-color)] bg-opacity-5' 
                  : ''
              }`}
            >
              <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${
                selectedCategory === category.id
                  ? 'bg-[var(--primary-color)]'
                  : 'bg-[var(--secondary-color)] bg-opacity-10'
              }`}>
                <div className={`${category.icon} text-xl ${
                  selectedCategory === category.id
                    ? 'text-white'
                    : 'text-[var(--secondary-color)]'
                }`}></div>
              </div>
              
              <p className={`text-sm font-medium ${
                selectedCategory === category.id
                  ? 'text-[var(--primary-color)]'
                  : 'text-[var(--text-secondary)]'
              }`}>
                {category.name}
              </p>
            </button>
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error('CategoryGrid component error:', error);
    return null;
  }
}