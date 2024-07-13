const express = require('express');
const router = express.Router();
const Product = require('../models/product');

function buildPaginatedResponse(data, page, size, totalElements) {
  return {
    _embedded: {
      products: data,
    },
    page: {
      number: page,
      size: size,
      totalElements: totalElements
    }
  };
}

// Rotas
router.get('/:id', (req, res) => {
  const productId = req.params.id;
  const product = Product.getById(productId);
  if (!product) {
    return res.status(404).send('Product not found');
  }
  res.send(product);
});

router.get('/search/findByCategoryId', (req, res) => {
  const categoryId = parseInt(req.query.id, 10);
  const page = parseInt(req.query.page, 10) || 0;
  const size = parseInt(req.query.size, 10) || 10;

  const products = Product.getByCategoryId(categoryId);
  const totalElements = products.length;

  console.log(totalElements);
  const paginatedProducts = products.slice(page * size, (page + 1) * size);

  const response = buildPaginatedResponse(paginatedProducts, page, size, totalElements);
  res.send(response);
});

router.get('/search/findByNameContaining', (req, res) => {
  const name = req.query.name;
  const page = parseInt(req.query.page, 10) || 0;
  const size = parseInt(req.query.size, 10) || 10;

  const products = Product.searchByName(name, page, size);
  const totalElements = products.length;
  console.log(totalElements);
  const paginatedProducts = products.slice(page * size, (page + 1) * size);

  const response = buildPaginatedResponse(paginatedProducts, page, size, totalElements);
  res.send(response);
});

module.exports = router;
