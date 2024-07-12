const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51PaI0ORwXHFy4L8UN61RMPHJIIq2LCkIKmKzEM4h4LmbHJ5mzrlxf69EFv61vvdXIhWExpRmT5jwB0waGZfKQMQs00dxHTAqK6');

const OrderHistory = require('../models/orders_history');
const PaymentToken = require('../models/payment-token');

router.post('/purchase', (req, res) => {
  const purchase = req.body;
  const customer = purchase.customer;
  const email = customer.email;
  const order = purchase.order;


  //save new order
  const newOrder = new OrderHistory(
    order.orderTrackingNumber,
    order.totalPrice,
    order.totalQuantity,
    Date.now(),
    email
  );
  OrderHistory.save(newOrder);

  //save new paymentToken
  const paymentToken = PaymentToken.findByCustomerEmail(email);
  if(!paymentToken){
    const newPaymentToken = new PaymentToken(customer.id, email);
    PaymentToken.save(newPaymentToken);
  }

  res.status(201).send(newOrder);
});

// Rota para criar um Payment Intent
router.post('/payment-intents', async (req, res) => {
  const { amount, currency, email } = req.body;

  try {
    const paymentToken = PaymentToken.findByCustomerEmail(email);

    var customer = {id: paymentToken?.externalTokenId};
    console.log('costumer encontrado do db: '+ customer.id);
    if(!customer.id){
      customer = await stripe.customers.create();
      console.log('costumer criado: '+ customer.id);
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
      customer: customer.id,
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter
      // is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
      customerId: customer.id,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
