const ProductCategory = require('../models/product-category');

class ProductCategoryService {
  static getAll() {
    return [
      new ProductCategory(1, 'Aventureiros'),
      new ProductCategory(2, 'Camping Acessórios'),
      new ProductCategory(3, 'Desbravadores'),
      new ProductCategory(4, 'Diversos'),
      new ProductCategory(5, 'Jovens'),
      new ProductCategory(6, 'Motociclistas')
    ];
  }

  static getById(id) {
    const productCategories = this.getAll();
    return productCategories.find(p => p.id === id);
  }
}

module.exports = ProductCategoryService;
