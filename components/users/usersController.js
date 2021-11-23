const usersService = require('./usersService')

module.exports.login = (req, res, next) => {
    res.json({
        user: req.user,
        token: usersService.createJwT(req.user),
    });
}

module.exports.profile = (req, res, next) => {
    res.json(req.user);
}
