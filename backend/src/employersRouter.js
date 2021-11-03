const express = require('express');
const router = express.Router();
const Employer = require('./services/Employer');

router.get('/', async (req, res) => {
  const employers = await Employer.getAll();
  res.status(200).json(employers);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const employer = await Employer.getById(id);

  if (!employer) return res.status(404).json({ message: 'employer not found' });
  res.status(200).json(employer);
});

router.post('/', async (req, res) => {
  const { name, email, password, client_id } = req.body;
  const employer = await Employer.createEmployer(name, email, password, client_id);

  if (!employer) return res.status(400).json({ message: 'Invalid data.'});
  res.status(201).json({ message: 'Employer created successfully!' });
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, password, client_id } = req.body;
  const employer = await Employer.updateEmployer(id, name, email, password, client_id);

  if (!employer) return res.status(404).json({ message: 'Invalid Data.' });
  res.status(200).json({ message: 'Employer updated successfully!' });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const employer = await Employer.deleteEmployer(id);

  if (!employer) return res.status(404).json({ message: 'Employer not found!' });
  res.status(204).end();
});

module.exports = router;
