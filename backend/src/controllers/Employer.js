const Employer = require('../services/Employer');

const getAll = async (req, res) => {
  const employers = await Employer.getAll();
  res.status(200).json(employers);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const employer = await Employer.getById(id);

  if (!employer) return res.status(404).json({ message: 'employer not found' });
  res.status(200).json(employer);
};

const createEmployer = async (req, res) => {
  const { name, email, password, client_id } = req.body;
  const employer = await Employer.createEmployer(name, email, password, client_id);

  if (!employer) return res.status(400).json({ message: 'Invalid data.'});
  res.status(201).json({ message: 'Employer created successfully!' });
};

const updateEmployer = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, client_id } = req.body;
  const employer = await Employer.updateEmployer(id, name, email, password, client_id);

  if (!employer) return res.status(404).json({ message: 'Invalid Data.' });
  res.status(200).json({ message: 'Employer updated successfully!' });
};

const deleteEmployer = async (req, res) => {
  const { id } = req.params;
  const employer = await Employer.deleteEmployer(id);

  if (!employer) return res.status(404).json({ message: 'Employer not found!' });
  res.status(204).end();
};

module.exports = {
  getAll,
  getById,
  createEmployer,
  updateEmployer,
  deleteEmployer,
};
