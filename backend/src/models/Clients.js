const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  return connection()
    .then((db) => db.collection('clients').find().toArray())
    .then((clients) => clients);
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const client = await connection()
    .then((db) => db.collection('clients').findOne(new ObjectId(id)));

  if (!client) return null;
  return client;
};

const createClient = async (name) =>
  connection()
    .then((db) => db.collection('clients').insertOne({ name }))
    .then((result) => result);

const updateClient = async (id, name) =>
  connection()
    .then((db) => db.collection('clients').updateOne(
      { _id: new ObjectId(id)},
      { $set: { name } },
    ));

const deleteClient = async (id) =>
  connection()
    .then((db) => db.collection('clients').deleteOne({ _id: new ObjectId(id) }));

const isValid = (name) => {
  if(!name || typeof(name) !== 'string') return false;
  return true;
};

module.exports = {
  getAll,
  getById,
  isValid,
  createClient,
  updateClient,
  deleteClient,
};
