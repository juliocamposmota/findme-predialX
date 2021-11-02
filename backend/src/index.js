const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const clientsRouter = require('./clientRouter');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/clients', clientsRouter);

app.all('*', (req, res) => {
  return res.status(404).json({ message: `A rota '${req.path}' não existe nessa aplicação.`});
});

app.listen(3001, () => {
  console.log('aplicação escutando a porta 3001');
});
