const {ObjectId} = require('mongodb');
const {db} = require("../classes/classesDal");


module.exports.list = async () => {
    const coursesCollection = db().collection('courses');
    return await coursesCollection
        .find({
            isDeleted: false
        }).toArray();
}

