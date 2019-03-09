const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
});

server.use((req, res, next) => {
  if (isAuthorized(req)) { // add your authorization logic here
    next() // continue to JSON Server router
  } else {
    res.status(401).send({ error: 'No id token.' });
  }
})

server.use((req, res, next) => {
  if (req.originalUrl === '/comments') {
    next()
  } else {
    if (hasTenantId(req)) { // add your authorization logic here
      next() // continue to JSON Server router
    } else {
      res.status(401).send({ error: 'No tenant id header.' });
    }
  }

})

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});

function isAuthorized(req) {
  return !!req.header('Authorization')
}

function hasTenantId(req) {
  return !!req.get('X-Tenant-Id');
}
