const express = require('express');
const router = express.Router();
const Order = require('../services/Order');

router.get('/', async (req, res) => {
  const orders = await Order.getAll();
  res.status(200).json(orders);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const order = await Order.getById(id);

  if (!order) return res.status(404).json({ message: 'Order not found' });
  res.status(200).json(order);
});

router.post('/', async (req, res) => {
  const {
    dateCreation,
    client_id,
    employer_id,
    description,
    deadline
  } = req.body;

  const order = await Order.createOrder(
    dateCreation,
    client_id,
    employer_id,
    description,
    deadline
    );

  if (!order) return res.status(400).json({ message: 'Invalid data.'});
  res.status(201).json({ message: 'Order created successfully!' });
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const {
    dateCreation,
    client_id,
    employer_id,
    description,
    deadline
  } = req.body;

  const order = await Order.updateOrder(id, dateCreation, client_id, employer_id, description, deadline);

  if (!order) return res.status(404).json({ message: 'Invalid data' });
  res.status(200).json({ message: 'Order updated successfully!' });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const order = await Order.deleteOrder(id);;

  if (!order) return res.status(404).json({ message: 'Order not found!' });
  res.status(204).end();
});

module.exports = router;
