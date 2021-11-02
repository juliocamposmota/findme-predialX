const express = require('express');
const cors = require('cors'); // permitir outras aplicacoes consumirem esta api.
const bodyParser = require('body-parser'); // descomprimir os dados da requisição.
const authMiddleware = require('../authMiddleware');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(authMiddleware);

const clients = [
  { id: 1, name: 'PredialX' },
  { id: 2, name: 'XPTO ManPred'},
  { id: 3, name: 'Pred Service' },
];

app.get('/clients', getClients);
app.get('/clients/search', searchClients);
app.get('/clients/:id', getClient);

app.post('/clients', validateName, createClient);
app.put('/clients/:id', validateName, updateClient);
app.delete('/clients/:id', deleteClient);

app.all('*', unknownRoute);

app.listen(3001, () => {
  console.log('aplicação escutando a porta 3001');
});

function getClients(req, res) {
  res.json(clients);
}

function getClient(req, res) {
  const { id } = req.params;
  const recipe = clients.find((c) => c.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Client not found' });

  res.status(200).json(recipe);
}

function searchClients(req, res) {
  const { name } = req.query;
  const filtredClients = clients.filter((c) => c.name.includes(name));

  res.status(200).json(filtredClients);
}

function createClient(req, res) {
  const { id, name } = req.body;

  clients.push({ id, name });
  res.status(201).json({ message: 'Client created successfully!' });
}

function updateClient(req, res) {
  const { id } = req.params;
  const { name } = req.body;
  const clientIndex = clients.findIndex((c) => c.id === parseInt(id));

  if (clientIndex === -1) return res.status(404).json({ message: 'Client not found!' });

  clients[clientIndex] = { ...clients[clientIndex], name };

  res.status(200).json({ message: 'Client updated successfully!' });
}

function deleteClient(req, res) {
  const { id } = req.params;
  const clientIndex = clients.findIndex((c) => c.id === parseInt(id));

  if (clientIndex === -1) return res.status(404).json({ message: 'Client not found!' });

  clients.splice(clientIndex, 1);
  
  res.status(204).end();
}

function unknownRoute(req, res) {
  return res.status(404).json({ message: `A rota '${req.path}' não existe nessa aplicação.`});
}

function validateName(req, res, netx) {
  const { name } = req.body;
  if(!name || name === '') return res.status(404).json({ message: 'Invalid data.' });

  netx();
}
