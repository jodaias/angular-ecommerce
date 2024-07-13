class Product {
  constructor(id, sku, name, description, unitPrice, imageUrl, active, unitsInStock, dateCreated, lastUpdated, categoryId) {
    this.id = id;
    this.sku = sku;
    this.name = name;
    this.description = description;
    this.unitPrice = unitPrice;
    this.imageUrl = imageUrl;
    this.active = active;
    this.unitsInStock = unitsInStock;
    this.dateCreated = dateCreated;
    this.lastUpdated = lastUpdated;
    this.categoryId = categoryId;
  }

  static getAll() {
    return [
      new Product('1', 'SKU001', 'Product 1', 'Description for Product 1', 10.99, 'https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18755-zero.png?context=bWFzdGVyfGltYWdlc3w5NTEzNXxpbWFnZS9wbmd8YURJNUwyaGtNeTg1TnpNeU1EZ3pPVFF4TkRBMkx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RjMU5WOTZaWEp2TG5CdVp3fDE4N2Y0NWU3OGRkYjc3NzYxYWVjODcwMTViMWNjNDYwYmM0NDI0ZWI0ZmVkYmNlNDJlYmRkMTYyMWFhMjY5YzI', true, 100, new Date(), new Date(), 1),
      new Product('2', 'SKU002', 'Product 2', 'Description for Product 2', 19.99, 'https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18755-zero.png?context=bWFzdGVyfGltYWdlc3w5NTEzNXxpbWFnZS9wbmd8YURJNUwyaGtNeTg1TnpNeU1EZ3pPVFF4TkRBMkx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RjMU5WOTZaWEp2TG5CdVp3fDE4N2Y0NWU3OGRkYjc3NzYxYWVjODcwMTViMWNjNDYwYmM0NDI0ZWI0ZmVkYmNlNDJlYmRkMTYyMWFhMjY5YzI', true, 150, new Date(), new Date(), 2),
      new Product('3', 'SKU003', 'Product 3', 'Description for Product 3', 29.99, 'https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18755-zero.png?context=bWFzdGVyfGltYWdlc3w5NTEzNXxpbWFnZS9wbmd8YURJNUwyaGtNeTg1TnpNeU1EZ3pPVFF4TkRBMkx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RjMU5WOTZaWEp2TG5CdVp3fDE4N2Y0NWU3OGRkYjc3NzYxYWVjODcwMTViMWNjNDYwYmM0NDI0ZWI0ZmVkYmNlNDJlYmRkMTYyMWFhMjY5YzI', false, 50, new Date(), new Date(), 1),
      new Product('4', 'SKU004', 'Product 4', 'Description for Product 4', 15.99, 'https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18755-zero.png?context=bWFzdGVyfGltYWdlc3w5NTEzNXxpbWFnZS9wbmd8YURJNUwyaGtNeTg1TnpNeU1EZ3pPVFF4TkRBMkx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RjMU5WOTZaWEp2TG5CdVp3fDE4N2Y0NWU3OGRkYjc3NzYxYWVjODcwMTViMWNjNDYwYmM0NDI0ZWI0ZmVkYmNlNDJlYmRkMTYyMWFhMjY5YzI', true, 200, new Date(), new Date(), 2),
      new Product('5', 'SKU005', 'Product 5', 'Description for Product 5', 25.99, 'https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18755-zero.png?context=bWFzdGVyfGltYWdlc3w5NTEzNXxpbWFnZS9wbmd8YURJNUwyaGtNeTg1TnpNeU1EZ3pPVFF4TkRBMkx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RjMU5WOTZaWEp2TG5CdVp3fDE4N2Y0NWU3OGRkYjc3NzYxYWVjODcwMTViMWNjNDYwYmM0NDI0ZWI0ZmVkYmNlNDJlYmRkMTYyMWFhMjY5YzI', true, 80, new Date(), new Date(), 3),
      new Product('6', 'SKU006', 'Product 6', 'Description for Product 6', 12.99, 'https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18755-zero.png?context=bWFzdGVyfGltYWdlc3w5NTEzNXxpbWFnZS9wbmd8YURJNUwyaGtNeTg1TnpNeU1EZ3pPVFF4TkRBMkx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RjMU5WOTZaWEp2TG5CdVp3fDE4N2Y0NWU3OGRkYjc3NzYxYWVjODcwMTViMWNjNDYwYmM0NDI0ZWI0ZmVkYmNlNDJlYmRkMTYyMWFhMjY5YzI', false, 120, new Date(), new Date(), 4),
      new Product('7', 'SKU007', 'Product 7', 'Description for Product 7', 18.99, 'https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18755-zero.png?context=bWFzdGVyfGltYWdlc3w5NTEzNXxpbWFnZS9wbmd8YURJNUwyaGtNeTg1TnpNeU1EZ3pPVFF4TkRBMkx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RjMU5WOTZaWEp2TG5CdVp3fDE4N2Y0NWU3OGRkYjc3NzYxYWVjODcwMTViMWNjNDYwYmM0NDI0ZWI0ZmVkYmNlNDJlYmRkMTYyMWFhMjY5YzI', true, 90, new Date(), new Date(), 1),
      new Product('8', 'SKU008', 'Product 8', 'Description for Product 8', 18.99, 'https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18755-zero.png?context=bWFzdGVyfGltYWdlc3w5NTEzNXxpbWFnZS9wbmd8YURJNUwyaGtNeTg1TnpNeU1EZ3pPVFF4TkRBMkx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RjMU5WOTZaWEp2TG5CdVp3fDE4N2Y0NWU3OGRkYjc3NzYxYWVjODcwMTViMWNjNDYwYmM0NDI0ZWI0ZmVkYmNlNDJlYmRkMTYyMWFhMjY5YzI', true, 90, new Date(), new Date(), 3),
      new Product('9', 'SKU009', 'Product 9', 'Description for Product 9', 18.99, 'https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18755-zero.png?context=bWFzdGVyfGltYWdlc3w5NTEzNXxpbWFnZS9wbmd8YURJNUwyaGtNeTg1TnpNeU1EZ3pPVFF4TkRBMkx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RjMU5WOTZaWEp2TG5CdVp3fDE4N2Y0NWU3OGRkYjc3NzYxYWVjODcwMTViMWNjNDYwYmM0NDI0ZWI0ZmVkYmNlNDJlYmRkMTYyMWFhMjY5YzI', true, 90, new Date(), new Date(), 1),
      new Product('10', 'SKU010', 'Product 10', 'Description for Product 11', 18.99, 'https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18755-zero.png?context=bWFzdGVyfGltYWdlc3w5NTEzNXxpbWFnZS9wbmd8YURJNUwyaGtNeTg1TnpNeU1EZ3pPVFF4TkRBMkx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RjMU5WOTZaWEp2TG5CdVp3fDE4N2Y0NWU3OGRkYjc3NzYxYWVjODcwMTViMWNjNDYwYmM0NDI0ZWI0ZmVkYmNlNDJlYmRkMTYyMWFhMjY5YzI', true, 90, new Date(), new Date(), 5),
      new Product('11', 'SKU009', 'Product 11', 'Description for Product 12', 18.99, 'https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18755-zero.png?context=bWFzdGVyfGltYWdlc3w5NTEzNXxpbWFnZS9wbmd8YURJNUwyaGtNeTg1TnpNeU1EZ3pPVFF4TkRBMkx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RjMU5WOTZaWEp2TG5CdVp3fDE4N2Y0NWU3OGRkYjc3NzYxYWVjODcwMTViMWNjNDYwYmM0NDI0ZWI0ZmVkYmNlNDJlYmRkMTYyMWFhMjY5YzI', true, 90, new Date(), new Date(), 1),
      new Product('12', 'SKU009', 'Product 12', 'Description for Product 13', 18.99, 'https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18755-zero.png?context=bWFzdGVyfGltYWdlc3w5NTEzNXxpbWFnZS9wbmd8YURJNUwyaGtNeTg1TnpNeU1EZ3pPVFF4TkRBMkx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RjMU5WOTZaWEp2TG5CdVp3fDE4N2Y0NWU3OGRkYjc3NzYxYWVjODcwMTViMWNjNDYwYmM0NDI0ZWI0ZmVkYmNlNDJlYmRkMTYyMWFhMjY5YzI', true, 90, new Date(), new Date(), 1),
      new Product('13', 'SKU009', 'Product 13', 'Description for Product 14', 18.99, 'https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18755-zero.png?context=bWFzdGVyfGltYWdlc3w5NTEzNXxpbWFnZS9wbmd8YURJNUwyaGtNeTg1TnpNeU1EZ3pPVFF4TkRBMkx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RjMU5WOTZaWEp2TG5CdVp3fDE4N2Y0NWU3OGRkYjc3NzYxYWVjODcwMTViMWNjNDYwYmM0NDI0ZWI0ZmVkYmNlNDJlYmRkMTYyMWFhMjY5YzI', true, 90, new Date(), new Date(), 1),
      new Product('14', 'SKU009', 'Product 14', 'Description for Product 15', 18.99, 'https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18755-zero.png?context=bWFzdGVyfGltYWdlc3w5NTEzNXxpbWFnZS9wbmd8YURJNUwyaGtNeTg1TnpNeU1EZ3pPVFF4TkRBMkx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RjMU5WOTZaWEp2TG5CdVp3fDE4N2Y0NWU3OGRkYjc3NzYxYWVjODcwMTViMWNjNDYwYmM0NDI0ZWI0ZmVkYmNlNDJlYmRkMTYyMWFhMjY5YzI', true, 90, new Date(), new Date(), 1),
      new Product('15', 'SKU009', 'Product 15', 'Description for Product 15', 18.99, 'https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18755-zero.png?context=bWFzdGVyfGltYWdlc3w5NTEzNXxpbWFnZS9wbmd8YURJNUwyaGtNeTg1TnpNeU1EZ3pPVFF4TkRBMkx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RjMU5WOTZaWEp2TG5CdVp3fDE4N2Y0NWU3OGRkYjc3NzYxYWVjODcwMTViMWNjNDYwYmM0NDI0ZWI0ZmVkYmNlNDJlYmRkMTYyMWFhMjY5YzI', true, 90, new Date(), new Date(), 1),
      new Product('16', 'SKU009', 'Product 16', 'Description for Product 16', 18.99, 'https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18755-zero.png?context=bWFzdGVyfGltYWdlc3w5NTEzNXxpbWFnZS9wbmd8YURJNUwyaGtNeTg1TnpNeU1EZ3pPVFF4TkRBMkx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RjMU5WOTZaWEp2TG5CdVp3fDE4N2Y0NWU3OGRkYjc3NzYxYWVjODcwMTViMWNjNDYwYmM0NDI0ZWI0ZmVkYmNlNDJlYmRkMTYyMWFhMjY5YzI', true, 90, new Date(), new Date(), 2),
      new Product('17', 'SKU009', 'Product 17', 'Description for Product 17', 18.99, 'https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18755-zero.png?context=bWFzdGVyfGltYWdlc3w5NTEzNXxpbWFnZS9wbmd8YURJNUwyaGtNeTg1TnpNeU1EZ3pPVFF4TkRBMkx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RjMU5WOTZaWEp2TG5CdVp3fDE4N2Y0NWU3OGRkYjc3NzYxYWVjODcwMTViMWNjNDYwYmM0NDI0ZWI0ZmVkYmNlNDJlYmRkMTYyMWFhMjY5YzI', true, 90, new Date(), new Date(), 1),
      new Product('18', 'SKU009', 'Product 18', 'Description for Product 18', 18.99, 'https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18755-zero.png?context=bWFzdGVyfGltYWdlc3w5NTEzNXxpbWFnZS9wbmd8YURJNUwyaGtNeTg1TnpNeU1EZ3pPVFF4TkRBMkx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RjMU5WOTZaWEp2TG5CdVp3fDE4N2Y0NWU3OGRkYjc3NzYxYWVjODcwMTViMWNjNDYwYmM0NDI0ZWI0ZmVkYmNlNDJlYmRkMTYyMWFhMjY5YzI', true, 90, new Date(), new Date(), 1),
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

module.exports = Product;
