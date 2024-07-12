const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Import routes
const productsRoutes = require('./routes/products');
const productCategoryRoutes = require('./routes/product-category');
const countriesRoutes = require('./routes/countries');
const statesRoutes = require('./routes/states');
const ordersRoutes = require('./routes/orders');
const checkoutRoutes = require('./routes/checkout');

// Rota base para produtos
app.use('/api/products', productsRoutes);

// Rota base para categorias de produtos
app.use('/api/product-category', productCategoryRoutes);

// Rota base para países
app.use('/api/countries', countriesRoutes);

// Rota base para estados
app.use('/api/states', statesRoutes);

// Rota base para orders
app.use('/api/orders', ordersRoutes);

// Rota base para checkout
app.use('/api/checkout', checkoutRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
