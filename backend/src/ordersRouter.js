const express = require('express');
const router = express.Router();
const Order = require('./models/Orders');

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

  if (!Order.isDataValid(dateCreation, client_id, employer_id, description, deadline)) {
    return res.status(400).json({ message: 'Invalid data.'});
  }

  await Order.createOrder(
    dateCreation,
    client_id,
    employer_id,
    description,
    deadline
  );

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

  const order = await Order.getById(id);

  if (!Order.isDataValid(dateCreation, client_id, employer_id, description, deadline)) {
    return res.status(400).json({ message: 'Invalid data.' });
  }

  if (!order) return res.status(404).json({ message: 'Order not found' });

  await Order.updateOrder(id, dateCreation, client_id, employer_id, description, deadline);
  res.status(200).json({ message: 'Order updated successfully!' });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const order = await Order.getById(id);

  if (!order) return res.status(404).json({ message: 'Order not found!' });

  await Order.deleteOrder(id);
  res.status(204).end();
});

module.exports = router;
