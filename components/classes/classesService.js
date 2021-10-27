const {ObjectId} = require('mongodb');
const {db} = require("./classesDal");


module.exports.list = async () => {
    const coursesCollection = db().collection('courses');
    const coursesList = await coursesCollection.find({isDeleted: false}).toArray();
    return coursesList;
}

module.exports.add = async (item) => {
    const coursesCollection = db().collection('courses');
    return await coursesCollection.insertOne(item, (err, res) => {
        if (err) throw err;
        console.log('1 document inserted')
    })
}