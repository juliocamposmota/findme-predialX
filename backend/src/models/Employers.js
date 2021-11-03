const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = () => {
  return connection()
    .then((db) => db.collection('employers').find().toArray())
    .then((employers) => employers);
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const employer = await connection()
    .then((db) => db.collection('employers').findOne(new ObjectId(id)));

  if (!employer) return null;
  return employer;
};

const createEmployer = (name, email, password, client_id) => {
  return connection()
    .then((db) => db.collection('employers').insertOne({ name, email, password, client_id }))
    .then((result) => result);
};

const updateEmployer = (id, name, email, password, client_id) => {
  return connection()
    .then((db) => db.collection('employers').updateOne(
      { _id: new ObjectId(id)},
      { $set: { name, email, password, client_id } },
    ));
};

const deleteEmployer = (id) => {
  return connection()
    .then((db) => db.collection('employers').deleteOne({ _id: new ObjectId(id) }));
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
  isDataValid,
};
