const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  return await connection()
    .then((db) => db.collection('employers').find().toArray());
};

const getById = async (id) => {
  return await connection()
    .then((db) => db.collection('employers').findOne(new ObjectId(id)));
};

const createEmployer = (name, email, password, client_id) => {
  return connection()
    .then((db) => db.collection('employers').insertOne({ name, email, password, client_id }));
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

module.exports = {
  getAll,
  getById,
  createEmployer,
  updateEmployer,
  deleteEmployer,
};
