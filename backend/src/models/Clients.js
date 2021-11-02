const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT id, name FROM predialX.clients;';
  const [clients] = await connection.execute(query);
  return clients;
};

const getById = async (id) => {
  const query = 'SELECT id, name FROM predialX.clients WHERE id = ?';
  const [client] = await connection.execute(query, [id]);

  if (client.length === 0) return null;

  return client[0];
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

const create = async (name) => connection.execute(
  'INSERT INTO predialX.clients (name) VALUES (?)',
  [name],
);

module.exports = {
  getAll,
  getById,
  serachByName,
  isValid,
  create,
};
