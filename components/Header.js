function Header({ searchTerm, setSearchTerm }) {
  try {
    return (
      <header className="header-gradient text-white sticky top-0 z-50 shadow-lg" data-name="header" data-file="components/Header.js">
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
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}