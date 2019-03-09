module.exports = (req, res, next) => {
  if (isAuthorized(req)) {
    next()
  } else {
    res.status(401).send({ error: 'No id token.' });
  }
}

function isAuthorized(req) {
  return !!req.header('Authorization')
}