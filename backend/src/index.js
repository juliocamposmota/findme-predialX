const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const clientsRouter = require('./clientsRouter');
const employersRouter = require('./employersRouter');
const ordersRouter = require('./ordersRouter');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/clients', clientsRouter);
app.use('/employers', employersRouter);
app.use('/orders', ordersRouter);

app.all('*', (req, res) => {
  return res.status(404).json({ message: `There isn't a '${req.path}' route on this app.`});
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
