const Product = require('../models/product');
const { readFromFile, writeToFile } = require("../shared/utils");

class ProductService {
  static getAll() {
    return [
      ...this.getAllP(),
      ...this.getDesbravadores(),
      ...this.getDiversos(),
      ...this.getJovens(),
      ...this.getMotociclistas()
    ]
    ;
  }

  static getDesbravadores() {
    return [
      new Product('3', 'SKU003', 'Product 3', 'Description for Product 3', 29.99, 'imagem3', false, 50, new Date(), new Date(), 3),
      new Product('9', 'SKU009', 'Product 9', 'Description for Product 9', 18.99, 'imagem9', true, 90, new Date(), new Date(), 3),
      new Product('15', 'SKU015', 'Product 15', 'Description for Product 15', 18.99, 'imagem15', true, 90, new Date(), new Date(), 3)
    ];
  }

  static getDiversos() {
    return [
      new Product('4', 'SKU004', 'Product 4', 'Description for Product 4', 15.99, 'imagem4', true, 200, new Date(), new Date(), 4),
      new Product('10', 'SKU010', 'Product 10', 'Description for Product 10', 18.99, 'imagem10', true, 90, new Date(), new Date(), 4),
      new Product('16', 'SKU016', 'Product 16', 'Description for Product 16', 18.99, 'imagem16', true, 90, new Date(), new Date(), 4)
    ];
  }

  static getJovens() {
    return [
      new Product('5', 'SKU005', 'Product 5', 'Description for Product 5', 25.99, 'imagem5', true, 80, new Date(), new Date(), 5),
      new Product('11', 'SKU011', 'Product 11', 'Description for Product 11', 18.99, 'imagem11', true, 90, new Date(), new Date(), 5),
      new Product('17', 'SKU017', 'Product 17', 'Description for Product 17', 18.99, 'imagem17', true, 90, new Date(), new Date(), 5)
    ];
  }

  static getMotociclistas() {
    return [
      new Product('6', 'SKU006', 'Product 6', 'Description for Product 6', 12.99, 'imagem6', false, 120, new Date(), new Date(), 6),
      new Product('12', 'SKU012', 'Product 12', 'Description for Product 12', 18.99, 'imagem12', true, 90, new Date(), new Date(), 6),
      new Product('18', 'SKU018', 'Product 18', 'Description for Product 18', 18.99, 'imagem18', true, 90, new Date(), new Date(), 6)
    ];
  }

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

  static getAllP(){
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
