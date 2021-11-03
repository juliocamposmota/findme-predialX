const Client = require('../models/Client');
const { ObjectId } = require('mongodb');

const getAll = async () => await Client.getAll();

const getById = async (id) => {
  const validId = ObjectId.isValid(id);

  if (!validId) return null;

  return await Client.getById(id);
};

const createClient = async (name) => {
  const validName = isNameValid(name);

  if(!validName) return null;

  return await Client.createClient(name)
};

const updateClient = async (id, name) => {
  const validClient = ObjectId.isValid(id) && isNameValid(name);

  if(!validClient) return null;

  return await Client.updateClient(id, name)
};

const deleteClient = async (id) => {
  const validId = ObjectId.isValid(id);

  if (!validId) return null;

  return await Client.deleteClient(id)
};

const isNameValid = (name) => {
  if(!name || typeof(name) !== 'string') return false;
  return true;
};

module.exports = {
  getAll,
  getById,
  createClient,
  updateClient,
  deleteClient,
};
