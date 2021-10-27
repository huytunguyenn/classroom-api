const {ObjectId} = require('mongodb');
const {db} = require("../classes/classesDal");


module.exports.list = async () => {
    const coursesCollection = db().collection('courses');
    return await coursesCollection
        .find({
            isDeleted: false
        }).toArray();
}

module.exports.add = async (item) => {
    const coursesCollection = db().collection('courses');
    await coursesCollection.insertOne(item, (err, res) => {
        if (err) throw err;
        console.log('1 document inserted')
    })
}