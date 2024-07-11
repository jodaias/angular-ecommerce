const { readOrdersFromFile, writeOrdersToFile, generateUniqueId } = require('../routes/orders/utils/file-utils');

class OrderHistory {
  constructor(orderTrackingNumber, totalPrice, totalQuantity, dateCreated, customerEmail) {
    this.id = generateUniqueId();
    this.orderTrackingNumber = orderTrackingNumber;
    this.totalPrice = totalPrice;
    this.totalQuantity = totalQuantity;
    this.dateCreated = dateCreated;
    this.customerEmail = customerEmail;
  }

  static getOrders(){
    return readOrdersFromFile();
  }

  static saveOrders(orders){
    writeOrdersToFile(orders);
  }

  static findByCustomerEmail(email) {
    const orders = this.getOrders();
    return orders.filter(order => order.customerEmail === email);
  }
}
module.exports = OrderHistory;
