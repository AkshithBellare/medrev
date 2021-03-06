var jwt = require('jsonwebtoken');
const config = require('../config/db.config');

var checkToken = (req, res, next) => {
  var token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (token.startsWith('Bearer JWT ')) {
    // Remove Bearer from string
    token = token.slice(11, token.length);
  }

  if (token) {
    jwt.verify(token, config.keys.secret, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        req.body.username = decoded.username;
        next();
      }
    });
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
};

module.exports = {
  checkToken: checkToken
}