const { readFromFile, writeToFile, generateUniqueId } = require('../shared/utils');


class PaymentToken {
  constructor(externalTokenId, customerEmail) {
    const dirname = "../data/payment-tokens.json";
    const paymentTokens = readFromFile(dirname);
    this.id = generateUniqueId(paymentTokens);
    this.externalTokenId = externalTokenId;
    this.customerEmail = customerEmail;
  }

  static getAll(){
    const dirname = "../data/payment-tokens.json";
    return readFromFile(dirname);
  }

  static save(newPaymentToken){
    const paymentTokens = this.getAll();
    paymentTokens.push(newPaymentToken);
    const dirname = "../data/payment-tokens.json";
    writeToFile(paymentTokens, dirname);
  }

  static findByCustomerEmail(email) {
    const paymentTokens = this.getAll();
    const paymentToken = paymentTokens.find(paymentToken => paymentToken.customerEmail === email);
    return paymentToken;
  }
}
module.exports = PaymentToken;
