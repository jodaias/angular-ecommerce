const Product = require('../models/product');
const { readFromFile, writeToFile } = require("../shared/utils");

class ProductService {
  static getById(id) {
    const products = this.getAll();
    return products.find(p => p.id === id);
  }

  static getByCategoryId(categoryId) {
    const products = this.getAll().filter(p => p.categoryId === categoryId);
    return products;
  }

  static searchByName(name) {
    const products = this.getAll().filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
    return products;
  }

  static getAll(){
    const dirname = "../data/products.json";
    return readFromFile(dirname);
  }

  static save(newProduct){
    const products = this.getAll();
    products.push(newProduct);
    const dirname = "../data/products.json";
    writeToFile(products, dirname);
  }
}

module.exports = ProductService;
