const express = require('express');
const router = express.Router();

const clients = [
  { id: 1, name: 'PredialX' },
  { id: 2, name: 'XPTO ManPred'},
  { id: 3, name: 'Pred Service' },
];

function validateName(req, res, netx) {
  const { name } = req.body;
  if(!name || name === '') return res.status(404).json({ message: 'Invalid data.' });

  netx();
}

router.get('/', (req, res) => {
  res.json(clients);
});

router.get('/search', (req, res) => {
  const { name } = req.query;
  const filtredClients = clients.filter((c) => c.name.includes(name));

  res.status(200).json(filtredClients);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const recipe = clients.find((c) => c.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Client not found' });

  res.status(200).json(recipe);
});

router.post('/', validateName, (req, res) => {
  const { id, name } = req.body;

  clients.push({ id, name });
  res.status(201).json({ message: 'Client created successfully!' });
});

router.put('/:id', validateName, (req, res) => {
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
