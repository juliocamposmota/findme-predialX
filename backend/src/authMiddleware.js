const validUsers = [
  { username: 'juliomota', password: 'julio123' },
  { username: 'gabrielranyer', password: 'gabriel123' },
  { username: 'regis', password: 'regis123' },
  { username: 'Supervisor PredialX', password: 'supervisorl123' }
];

function authMiddleware(req, res, next) {
  const { username, password } = req.headers;

  if (!username && !password)
    return res.status(401).json({ message: 'Username or password cant be blank.' });

  const user = validUsers.find((user) => user.username === username);

  if (!user) return res.status(401).json({ message: 'Invalid credentials.' });

  if (!(username === user.username && password === user.password))
    return res.status(401).json({ message: 'Invalid credentials.' });

  req.user = user;

  next();
}

module.exports = authMiddleware;
