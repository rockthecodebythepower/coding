const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, './db.json'));
const middlewares = jsonServer.defaults();

const hasToken = (req, res, next) => {
  if (req.query.token !== 'DpR32vAeE6K2') {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  next();
};

server.use(middlewares);
server.use('/api', [hasToken], router);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log('Server listening');
});
