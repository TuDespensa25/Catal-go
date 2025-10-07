const categories = [
  { id: 'todos', name: 'Todos', icon: 'icon-grid-3x3' },
  { id: 'carnicos', name: 'Cárnicos', icon: 'icon-beef' },
  { id: 'lacteos', name: 'Lácteos', icon: 'icon-milk' },
  { id: 'liquidos', name: 'Líquidos', icon: 'icon-glass-water' },
  { id: 'agro', name: 'Agro', icon: 'icon-wheat' },
  { id: 'confiteria', name: 'Confitería', icon: 'icon-candy' },
  { id: 'hogar', name: 'Hogar', icon: 'icon-home' },
  { id: 'electrodomesticos', name: 'Electrodomésticos', icon: 'icon-zap' }
];

const productData = [
  // Cárnicos
  { id: 1, name: 'Carne de Res Premium', category: 'carnicos', description: 'Corte selecto de alta calidad', image: 'https://images.unsplash.com/photo-1588347818431-13aa3d47f504?w=400&h=400&fit=crop' },
  { id: 2, name: 'Pollo Entero Fresco', category: 'carnicos', description: 'Pollo fresco de granja', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=400&fit=crop' },
  { id: 3, name: 'Cerdo Magro', category: 'carnicos', description: 'Corte magro sin grasa', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=400&fit=crop' },
  
  // Lácteos
  { id: 4, name: 'Leche Entera 1L', category: 'lacteos', description: 'Leche fresca pasteurizada', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop' },
  { id: 5, name: 'Queso Fresco', category: 'lacteos', description: 'Queso artesanal cremoso', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=400&fit=crop' },
  { id: 6, name: 'Yogurt Natural', category: 'lacteos', description: 'Yogurt sin azúcar añadida', image: 'https://images.unsplash.com/photo-1571212515416-ffa5dccf5f1a?w=400&h=400&fit=crop' },
  
  // Líquidos
  { id: 7, name: 'Agua Mineral 500ml', category: 'liquidos', description: 'Agua purificada natural', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop' },
  { id: 8, name: 'Jugo de Naranja', category: 'liquidos', description: 'Jugo natural 100%', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=400&fit=crop' },
  
  // Agro
  { id: 9, name: 'Arroz Blanco 1kg', category: 'agro', description: 'Grano largo premium', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop' },
  { id: 10, name: 'Frijoles Negros', category: 'agro', description: 'Frijoles secos seleccionados', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop' },
  
  // Confitería
  { id: 11, name: 'Chocolate Artesanal', category: 'confiteria', description: 'Chocolate 70% cacao', image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&h=400&fit=crop' },
  { id: 12, name: 'Galletas de Avena', category: 'confiteria', description: 'Galletas caseras integrales', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop' },
  
  // Hogar
  { id: 13, name: 'Detergente Líquido', category: 'hogar', description: 'Fórmula concentrada', image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop' },
  { id: 14, name: 'Papel Higiénico 4 rollos', category: 'hogar', description: 'Suave y resistente', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop' },
  
  // Electrodomésticos
  { id: 15, name: 'Licuadora 3 velocidades', category: 'electrodomesticos', description: 'Potente motor 600W', image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&h=400&fit=crop' },
  { id: 16, name: 'Tostadora 2 panes', category: 'electrodomesticos', description: 'Control de temperatura', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop' }
];