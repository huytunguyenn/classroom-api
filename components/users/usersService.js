const jwt = require('jsonwebtoken');


module.exports.createJwT = (user) => {
    return jwt.sign(user, process.env.JWT_SECRET_KEY);
}