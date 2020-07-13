const jwt = require('jsonwebtoken');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401)
      .json({ error: 'No token provided.' });
  }

  const parts = authHeader.split(' ');

  if (!parts.length === 2) {
    return res.status(401)
      .json({ error: 'Token error' });
  }

  const token = parts[1];

  // if (!/^Bearer$/i.test(scheme)) {
  //   return res.status(401)
  //     .json({ error: 'Token malformatted.' });
  // }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401)
        .json({ error: 'Invalid token.' });
    }

    req.userId = decoded.id;
    return next();
  });
};
