const Order = require('../models/Order');
const { ObjectId } = require('mongodb');

const getAll = async () => await Order.getAll();

const getById = async (id) => {
  const validId = ObjectId.isValid(id);

  if (!validId) return null;

  return await Order.getById(id);
};

const createOrder = async (dateCreation, client_id, employer_id, description, deadline) => {
  const validData = isDataValid(dateCreation, client_id, employer_id, description, deadline);

  if(!validData) return null;

  return await Order.createOrder(dateCreation, client_id, employer_id, description, deadline)
};

const updateOrder = async (id, dateCreation, client_id, employer_id, description, deadline) => {
  const validOrder = ObjectId.isValid(id) && isDataValid(dateCreation, client_id, employer_id, description, deadline);

  if(!validOrder) return null;

  return await Order.updateOrder(id, dateCreation, client_id, employer_id, description, deadline)
};

const deleteOrder = async (id) => {
  const validId = ObjectId.isValid(id);

  if (!validId) return null;

  return await Order.deleteOrder(id)
};

const isDataValid = (dateCreation, client_id, employer_id, description, deadline) => {
  if (!dateCreation || typeof(dateCreation) != 'string') return false;
  if (!client_id || typeof(client_id) != 'string') return false;
  if (!employer_id || typeof(employer_id) != 'string') return false;
  if (!description || typeof(description) != 'string') return false;
  if (!deadline || typeof(deadline) != 'string') return false;
  return true;
};

module.exports = {
  getAll,
  getById,
  createOrder,
  updateOrder,
  deleteOrder,
};
