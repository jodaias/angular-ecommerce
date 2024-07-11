const express = require('express');
const router = express.Router();
const Product = require('../models/product');

function buildPaginatedResponse(data, page, size) {
  return {
    _embedded: {
      products: data,
    },
    page: {
      number: page,
      size: size,
      totalElements: data.length
    }
  };
}

// Rotas
router.get('/:id', (req, res) => {
  const productId = req.params.id;
  const product = Product.getProductById(productId);
  if (!product) {
    return res.status(404).send('Product not found');
  }
  res.send(product);
});

router.get('/search/findByCategoryId', (req, res) => {
  const categoryId = parseInt(req.query.id, 10);
  const page = parseInt(req.query.page, 10) || 0;
  const size = parseInt(req.query.size, 10) || 10;

  const products = Product.getProductsByCategoryId(categoryId, page, size);
  const response = buildPaginatedResponse(products, page, size);
  res.send(response);
});

router.get('/search/findByNameContaining', (req, res) => {
  const name = req.query.name;
  const page = parseInt(req.query.page, 10) || 0;
  const size = parseInt(req.query.size, 10) || 10;

  const products = Product.searchProductsByName(name, page, size);
  const response = buildPaginatedResponse(products, page, size);
  res.send(response);
});

module.exports = router;
