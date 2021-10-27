const classesService = require('./classesService')

module.exports.list = async (req, res, next) => {
    const classes = await classesService.list()
    res.json(classes);

}

module.exports.detail = (req, res, next) => {
    // res.json(dummy.find(cls => cls.id === parseInt(req.params.id)));
}

module.exports.add = (req, res, next) => {
    // const newCls = {
    //     ...req.body,
    //     id: dummy.length + 1
    // }
    //
    // dummy.push(newCls);
    // res.json(newCls);
}