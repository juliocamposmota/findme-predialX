const validUser = { username: 'juliomota', password: 'julio123' };

function authMiddleware(req, res, next) {
  const { username, password } = req.headers;

  if(!username || !password)
    return res.status(404).json({ message: 'Username or password cant be blank' });
  
  if(username !== validUser.username || password !== validUser.password)
    return res.status(404).json({ message: 'Invalid credentials.' });

  next();
}

module.exports = authMiddleware;
