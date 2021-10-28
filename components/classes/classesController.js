const classesService = require('./classesService')

module.exports.list = async (req, res, next) => {
    const classes = await classesService.list()
    res.json(classes);

}


module.exports.add = async (req, res, next) => {
    const newCls = {
        ...req.body,
    }
    await classesService.add(newCls);
    res.json('Successfully added');
}