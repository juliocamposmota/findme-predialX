const express = require('express');
const router = express.Router();
const Order = require('../controllers/Order');

router.get('/', Order.getAll);
router.get('/:id', Order.getById);

router.post('/', Order.createOrder);
router.put('/:id', Order.updateOrder);
router.delete('/:id', Order.deleteOrder);

module.exports = router;
