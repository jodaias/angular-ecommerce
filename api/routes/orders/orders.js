const express = require('express');
const router = express.Router();
const OrderHistory = require('../../models/orders_history');

function buildResponse(data) {
  return {
    _embedded: {
      orders: data
    }
  };
}

// Rota para obter histórico de pedidos por e-mail do cliente
router.get('/search/findByCustomerEmailOrderByDateCreatedDesc', (req, res) => {
  const email = req.query.email;
  const filteredOrders = OrderHistory.findByCustomerEmail(email);
  const response = buildResponse(filteredOrders);
  res.json(response);
});

module.exports = router;
