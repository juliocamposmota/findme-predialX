const Employer = require('../models/Employer');
const { ObjectId } = require('mongodb');

const getAll = async () => await Employer.getAll();

const getById = async (id) => {
  const validId = ObjectId.isValid(id);

  if (!validId) return null;

  return await Employer.getById(id);
};

const createEmployer = async (name, email, password, client_id) => {
  const validData = isDataValid(name, email, password, client_id);

  if(!validData) return null;

  return await Employer.createEmployer(name, email, password, client_id)
};

const updateEmployer = async (id, name, email, password, client_id) => {
  const validEmployer = ObjectId.isValid(id) && isDataValid(name, email, password, client_id);

  if(!validEmployer) return null;

  return await Employer.updateEmployer(id, name, email, password, client_id)
};

const deleteEmployer = async (id) => {
  const validId = ObjectId.isValid(id);

  if (!validId) return null;

  return await Employer.deleteEmployer(id)
};

const isDataValid = (name, email, password, client_id) => {
  if (!name || typeof(name) != 'string') return false;
  if (!email || typeof(email) != 'string') return false;
  if (!password || typeof(password) != 'string') return false;
  if (!client_id) return false;
  return true;
};

module.exports = {
  getAll,
  getById,
  createEmployer,
  updateEmployer,
  deleteEmployer,
};