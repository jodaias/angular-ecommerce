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
}

module.exports = Product;
