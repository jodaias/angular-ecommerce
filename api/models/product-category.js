class ProductCategory {

  constructor(id, categoryName) {
    this.id = id;
    this.categoryName = categoryName;
  }

  static getAllProductCategory() {
    return [
      new ProductCategory(1, 'Category 01'),
      new ProductCategory(2, 'Category 02'),
      new ProductCategory(3, 'Category 03'),
      new ProductCategory(4, 'Category 04'),
      new ProductCategory(5, 'Category 05')
    ];
  }

  static getProductCategoryById(id) {
    const productCategories = ProductCategory.getAllProductCategory();
    return productCategories.find(p => p.id === id);
  }
}

module.exports = ProductCategory;
