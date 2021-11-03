const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  return await connection()
    .then((db) => db.collection('clients').find().toArray());
};

const getById = async (id) => {
  return await connection()
    .then((db) => db.collection('clients').findOne(new ObjectId(id)));
};

const createClient = async (name) => {
  return await connection()
    .then((db) => db.collection('clients').insertOne({ name }));
};

const updateClient = async (id, name) => {
  return await connection()
    .then((db) => db.collection('clients').updateOne(
      { _id: new ObjectId(id)},
      { $set: { name } },
    ));
};

const deleteClient = async (id) => {
  return await connection()
    .then((db) => db.collection('clients').deleteOne({ _id: new ObjectId(id) }));
};

module.exports = {
  getAll,
  getById,
  createClient,
  updateClient,
  deleteClient,
};
