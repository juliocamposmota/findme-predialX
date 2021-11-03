const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const clientRouter = require('./routes/Client');
const employerRouter = require('./routes/Employer');
const orderRouter = require('./routes/Order');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/clients', clientRouter);
app.use('/employers', employerRouter);
app.use('/orders', orderRouter);

app.all('*', (req, res) => {
  return res.status(404).json({ message: `There isn't a '${req.path}' route on this app.`});
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
