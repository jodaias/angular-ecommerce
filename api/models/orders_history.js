const { readFromFile, writeToFile, generateUniqueId } = require('../shared/utils');

class OrderHistory {
  constructor(orderTrackingNumber, totalPrice, totalQuantity, dateCreated, customerEmail, customerId) {
    const dirname = "../data/orders.json";
    const orders = readFromFile(dirname);
    this.id = generateUniqueId(orders);
    this.orderTrackingNumber = orderTrackingNumber;
    this.totalPrice = totalPrice;
    this.totalQuantity = totalQuantity;
    this.dateCreated = dateCreated;
    this.customerEmail = customerEmail;
  }

  static getAll(){
    const dirname = "../data/orders.json";
    return readFromFile(dirname);
  }

  static save(newOrder){
    const orders = this.getAll();
    orders.push(newOrder);
    const dirname = "../data/orders.json";
    writeToFile(orders, dirname);
  }

  static filterByCustomerEmail(email) {
    const orders = this.getAll();
    return orders.filter(order => order.customerEmail === email);
  }
}
module.exports = OrderHistory;
