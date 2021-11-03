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

const createOrder = async (dateCreation, client_id, employer_id, description, deadline) => {
  return await connection()
    .then((db) => db.collection('orders').insertOne({
      dateCreation,
      client_id,
      employer_id,
      description,
      deadline
    }));
};

const updateOrder = async (id, dateCreation, client_id, employer_id, description, deadline) => {
  return await connection()
    .then((db) => db.collection('orders').updateOne(
      { _id: new ObjectId(id)},
      { $set: { dateCreation, client_id, employer_id, description, deadline } },
    ));
};

const deleteOrder = async (id) => {
  return await connection()
    .then((db) => db.collection('orders').deleteOne({ _id: new ObjectId(id) }));
};

module.exports = {
  getAll,
  getById,
  createOrder,
  updateOrder,
  deleteOrder,
};
