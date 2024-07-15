const express = require('express');
const router = express.Router();
require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_API_KEY);

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
    if(!customer.id){
      customer = await stripe.customers.create();
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
      customer: customer.id,
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
