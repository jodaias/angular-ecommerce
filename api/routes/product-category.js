const express = require('express');
const router = express.Router();
const ProductCategoryService = require('../services/product-category-service');

function buildResponse(data) {
  return {
    _embedded: {
      productCategory: data,
    }
  };
}

// Rotas
router.get('/', (req, res) => {
  const productCategories = ProductCategoryService.getAll();
  const response = buildResponse(productCategories);
  res.send(response);
});

router.get('/:id', (req, res) => {
  const productCategoryId = req.params.id;
  const productCategory = ProductCategoryService.getById(productCategoryId);
  if (!productCategory) {
    return res.status(404).send('Product Category not found');
  }
  res.send(productCategory);
});


module.exports = router;
