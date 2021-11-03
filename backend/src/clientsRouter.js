const express = require('express');
const router = express.Router();
const Client = require('./models/Clients');

router.get('/', async (_req, res) => {
  const clients = await Client.getAll();
  res.status(200).json(clients);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const client = await Client.getById(id);

  if (!client) return res.status(404).json({ message: 'Client not found' });
  res.status(200).json(client);
});

router.post('/', async (req, res) => {
  const { name } = req.body;

  if (!Client.isNameValid(name)) return res.status(400).json({ message: 'Invalid data.'});

  await Client.createClient(name);
  res.status(201).json({ message: 'Client created successfully!' });
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const client = await Client.getById(id);

  if (!Client.isNameValid(name)) return res.status(400).json({ message: 'Invalid data.' });
  if (!client) return res.status(404).json({ message: 'Client not found' });

  await Client.updateClient(id, name);
  res.status(200).json({ message: 'Client updated successfully!' });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const client = await Client.getById(id);

  if (!client) return res.status(404).json({ message: 'Client not found!' });

  await Client.deleteClient(id);
  res.status(204).end();
});

module.exports = router;
