// js/config/supabase.js
// ============================================
// Configuración de Supabase - TUDespensa.25
// ============================================

const SUPABASE_CONFIG = {
    url: 'https://ivbpblfwasphqczhkfpi.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2YnBibGZ3YXNwaHFjemhrZnBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzMzAyMjAsImV4cCI6MjA4ODkwNjIyMH0.SXZhgi4w3IiTseZXvbhbp7FlYEHMv-hZZm_f67srA7o'
};

// Inicializar cliente de Supabase
const supabaseClient = supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);

// Servicio de productos
const ProductService = {
    // Obtener todos los productos con su disponibilidad
    getAllProducts: async () => {
        try {
            const { data: products, error } = await supabaseClient
                .from('products')
                .select(`
                    *,
                    product_availability (
                        municipality_id
                    )
                `);
            
            if (error) throw error;
            
            // Transformar los datos al formato que espera la app
            return products.map(p => ({
                id: p.id,
                name: p.name,
                category: p.category,
                description: p.description || '',
                image: p.image || '/images/default.png',
                price: parseFloat(p.price),
                recent: p.recent || 0,
                availableIn: p.product_availability ? p.product_availability.map(pa => pa.municipality_id) : []
            }));
        } catch (error) {
            console.error('Error en getAllProducts:', error);
            return [];
        }
    },
    
    // Obtener un producto por ID
    getProductById: async (id) => {
        try {
            const { data, error } = await supabaseClient
                .from('products')
                .select(`
                    *,
                    product_availability (
                        municipality_id
                    )
                `)
                .eq('id', id)
                .single();
            
            if (error) throw error;
            
            return {
                ...data,
                price: parseFloat(data.price),
                availableIn: data.product_availability ? data.product_availability.map(pa => pa.municipality_id) : []
            };
        } catch (error) {
            console.error('Error en getProductById:', error);
            return null;
        }
    },
    
    // Guardar producto (crear o actualizar)
    saveProduct: async (product) => {
        try {
            const { id, availableIn, ...productData } = product;
            
            // Asegurar que price sea número
            productData.price = parseFloat(productData.price);
            
            let productId = id;
            
            // Si tiene ID y no es uno de los originales (mayor a 1000), actualizar
            if (id && id < 1000) {
                // Es un ID original, crear nuevo en lugar de actualizar
                const { data: newProduct, error: insertError } = await supabaseClient
                    .from('products')
                    .insert([{...productData, id: undefined}]) // Dejar que Supabase asigne ID
                    .select();
                
                if (insertError) throw insertError;
                productId = newProduct[0].id;
            } else if (id) {
                // Actualizar producto existente
                const { error: updateError } = await supabaseClient
                    .from('products')
                    .update(productData)
                    .eq('id', id);
                
                if (updateError) throw updateError;
                
                // Eliminar disponibilidad anterior
                const { error: deleteError } = await supabaseClient
                    .from('product_availability')
                    .delete()
                    .eq('product_id', id);
                
                if (deleteError) throw deleteError;
            } else {
                // Crear nuevo producto
                const { data: newProduct, error: insertError } = await supabaseClient
                    .from('products')
                    .insert([productData])
                    .select();
                
                if (insertError) throw insertError;
                productId = newProduct[0].id;
            }
            
            // Insertar nueva disponibilidad
            if (availableIn && availableIn.length > 0) {
                const availabilityData = availableIn.map(mId => ({
                    product_id: productId,
                    municipality_id: mId
                }));
                
                const { error: availError } = await supabaseClient
                    .from('product_availability')
                    .insert(availabilityData);
                
                if (availError) throw availError;
            }
            
            return productId;
        } catch (error) {
            console.error('Error en saveProduct:', error);
            throw error;
        }
    },
    
    // Eliminar producto
    deleteProduct: async (id) => {
        try {
            const { error } = await supabaseClient
                .from('products')
                .delete()
                .eq('id', id);
            
            if (error) throw error;
        } catch (error) {
            console.error('Error en deleteProduct:', error);
            throw error;
        }
    }
};

// Servicio de categorías
const CategoryService = {
    getAll: async () => {
        try {
            const { data, error } = await supabaseClient
                .from('categories')
                .select('*')
                .order('display_order', { ascending: true });
            
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Error en CategoryService:', error);
            return [];
        }
    }
};

// Servicio de municipios
const MunicipalityService = {
    getAll: async () => {
        try {
            const { data, error } = await supabaseClient
                .from('municipalities')
                .select('*')
                .order('id');
            
            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Error en MunicipalityService:', error);
            return [];
        }
    }
};