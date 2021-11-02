const express = require('express');
const cors = require('cors'); // permitir outras aplicacoes consumirem esta api.

const app = express();

app.use(cors());

const clients = [
  { id: 1, name: 'PredialX' },
  { id: 2, name: 'XPTO ManPred'},
  { id: 3, name: 'Pred Service' },
];

app.get('/clients', getClients);
app.get('/clients/:id', getClient);

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
