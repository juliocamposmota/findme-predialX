const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  return await connection()
    .then((db) => db.collection('orders').find().toArray());
};

const getById = async (id) => {
  return await connection()
    .then((db) => db.collection('orders').findOne(new ObjectId(id)));
};

const createOrder = (dateCreation, client_id, employer_id, description, deadline) => {
  return connection()
    .then((db) => db.collection('orders').insertOne({
      dateCreation,
      client_id,
      employer_id,
      description,
      deadline
    }));
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

module.exports = {
  getAll,
  getById,
  createOrder,
  updateOrder,
  deleteOrder,
};
