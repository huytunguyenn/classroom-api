const dummy = require("./dummy");


module.exports.list = (req, res, next) => {
    res.json(dummy);
}

module.exports.detail = (req, res, next) => {
    res.json(dummy.find(cls => cls.id === parseInt(req.params.id)));
}

module.exports.add = (req, res, next) => {
    const newCls = {
        ...req.body,
        id: dummy.length + 1
    }

    dummy.push(newCls);
    res.json(newCls);
}