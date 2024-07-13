const Product = require('../models/product');

class ProductService {
  static getAll() {
    return [
      ...this.getAventureiros(),
      ...this.getCamping(),
      ...this.getDesbravadores(),
      ...this.getDiversos(),
      ...this.getJovens(),
      ...this.getMotociclistas()
    ]
    ;
  }

  static getAventureiros() {
    return [
      new Product('1', 'SKU001', 'Product 1', 'Description for Product 1', 10.99, 'imagem1', true, 100, new Date(), new Date(), 1),
      new Product('7', 'SKU007', 'Product 7', 'Description for Product 7', 18.99, 'imagem7', true, 90, new Date(), new Date(), 1),
      new Product('13', 'SKU013', 'Product 13', 'Description for Product 13', 18.99, 'imagem13', true, 90, new Date(), new Date(), 1)
    ];
  }

  static getCamping() {
    return [
      new Product('2', 'SKU002', 'Product 2', 'Description for Product 2', 19.99, 'imagem2', true, 150, new Date(), new Date(), 2),
      new Product('8', 'SKU008', 'Product 8', 'Description for Product 8', 18.99, 'imagem8', true, 90, new Date(), new Date(), 3),
      new Product('14', 'SKU014', 'Product 14', 'Description for Product 14', 18.99, 'imagem14', true, 90, new Date(), new Date(), 1)
    ];
  }

  static getDesbravadores() {
    return [
      new Product('3', 'SKU003', 'Product 3', 'Description for Product 3', 29.99, 'imagem3', false, 50, new Date(), new Date(), 1),
      new Product('9', 'SKU009', 'Product 9', 'Description for Product 9', 18.99, 'imagem9', true, 90, new Date(), new Date(), 1),
      new Product('15', 'SKU015', 'Product 15', 'Description for Product 15', 18.99, 'imagem15', true, 90, new Date(), new Date(), 1)
    ];
  }

  static getDiversos() {
    return [
      new Product('4', 'SKU004', 'Product 4', 'Description for Product 4', 15.99, 'imagem4', true, 200, new Date(), new Date(), 2),
      new Product('10', 'SKU010', 'Product 10', 'Description for Product 10', 18.99, 'imagem10', true, 90, new Date(), new Date(), 5),
      new Product('16', 'SKU016', 'Product 16', 'Description for Product 16', 18.99, 'imagem16', true, 90, new Date(), new Date(), 2)
    ];
  }

  static getJovens() {
    return [
      new Product('5', 'SKU005', 'Product 5', 'Description for Product 5', 25.99, 'imagem5', true, 80, new Date(), new Date(), 3),
      new Product('11', 'SKU011', 'Product 11', 'Description for Product 11', 18.99, 'imagem11', true, 90, new Date(), new Date(), 1),
      new Product('17', 'SKU017', 'Product 17', 'Description for Product 17', 18.99, 'imagem17', true, 90, new Date(), new Date(), 1)
    ];
  }

  static getMotociclistas() {
    return [
      new Product('6', 'SKU006', 'Product 6', 'Description for Product 6', 12.99, 'imagem6', false, 120, new Date(), new Date(), 4),
      new Product('12', 'SKU012', 'Product 12', 'Description for Product 12', 18.99, 'imagem12', true, 90, new Date(), new Date(), 1),
      new Product('18', 'SKU018', 'Product 18', 'Description for Product 18', 18.99, 'imagem18', true, 90, new Date(), new Date(), 1)
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
    // const paginatedProducts = products.slice(page * size, (page + 1) * size);
    return products;
  }
}

module.exports = ProductService;
