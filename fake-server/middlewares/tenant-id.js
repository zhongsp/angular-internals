const bypass = ['/comments'];

module.exports = (req, res, next) => {
  if (hasTenantId(req) || isBypass(req)) {
    next()
  } else {
    res.status(401).send({ error: 'No tenant id header.' });
  }
}

function hasTenantId(req) {
  return !!req.get('X-Tenant-Id');
}

function isBypass(req) {
  return bypass.includes(req.originalUrl);
}
