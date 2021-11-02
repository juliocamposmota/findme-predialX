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

const serachByName = async (name) => {
  const query = `SELECT * FROM predialX.clients WHERE name LIKE '%${name}%'`;
  const [clients] = await connection.execute(query);

  if (clients.length === 0) return null;

  return clients;
};

const isValid = (name) => {
  if(!name || typeof(name) !== 'string') return false;
  return true;
};

const create = async (name) =>
  connection()
    .then((db) => db.collection('clients').insertOne({ name }))
    .then((result) => result);

module.exports = {
  getAll,
  getById,
  serachByName,
  isValid,
  create,
};
