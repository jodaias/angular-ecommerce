const { readFromFile, writeToFile } = require("../shared/utils");

class ProductCategoryService {
  static getById(id) {
    const productCategories = this.getAll();
    return productCategories.find(p => p.id === id);
  }

  static getAll(){
    const dirname = "../data/product-categories.json";
    return readFromFile(dirname);
  }

  static save(newProductCategory){
    const productCategories = this.getAll();
    productCategories.push(newProductCategory);
    const dirname = "../data/product-categories.json";
    writeToFile(productCategories, dirname);
  }
}

module.exports = ProductCategoryService;
