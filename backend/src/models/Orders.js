const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = () => {
  return connection()
    .then((db) => db.collection('orders').find().toArray())
    .then((orders) => orders);
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const order = await connection()
    .then((db) => db.collection('orders').findOne(new ObjectId(id)));

  if (!order) return null;
  return order;
};

const createOrder = (dateCreation, client_id, employer_id, description, deadline) => {
  return connection()
    .then((db) => db.collection('orders').insertOne({
      dateCreation,
      client_id,
      employer_id,
      description,
      deadline
    }))
    .then((result) => result);
};

const updateOrder = (id, dateCreation, client_id, employer_id, description, deadline) => {
  return connection()
    .then((db) => db.collection('orders').updateOne(
      { _id: new ObjectId(id)},
      { $set: { dateCreation, client_id, employer_id, description, deadline } },
    ));
};

const deleteOrder = (id) => {
  return connection()
    .then((db) => db.collection('orders').deleteOne({ _id: new ObjectId(id) }));
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
  isDataValid,
};
