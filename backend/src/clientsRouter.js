const express = require('express');
const router = express.Router();
const Client = require('./models/Clients');

router.get('/', async (_req, res) => {
  const clients = await Client.getAll();
  res.status(200).json(clients);
});

router.get('/search', async (req, res) => {
  const { name } = await req.query;
  const filteredClients = await Client.serachByName(name);

  if (!filteredClients) return res.status(404).json({ message: `No client match with ${name}`});
  res.status(200).json(filteredClients);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const client = await Client.getById(id);

  if (!client) return res.status(404).json({ message: 'Client not found' });
  res.status(200).json(client);
});

router.post('/', async (req, res) => {
  const { name } = req.body;

  if (!Client.isValid(name)) return res.status(400).json({ message: 'Invalid data.'});

  await Client.create(name);
  res.status(201).json({ message: 'Client created successfully!' });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const clientIndex = clients.findIndex((c) => c.id === parseInt(id));

  if (clientIndex === -1) return res.status(404).json({ message: 'Client not found!' });

  clients[clientIndex] = { ...clients[clientIndex], name };

  res.status(200).json({ message: 'Client updated successfully!' });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const clientIndex = clients.findIndex((c) => c.id === parseInt(id));

  if (clientIndex === -1) return res.status(404).json({ message: 'Client not found!' });

  clients.splice(clientIndex, 1);

  res.status(204).end();
});

module.exports = router;
