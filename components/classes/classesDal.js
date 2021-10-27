const {MongoClient} = require('mongodb');

const client = new MongoClient(
    'mongodb+srv://dbUser:huytu4488@gettingstarted.obatq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology:true
    });

let database;

async function connectDb() {
    await client.connect();
    database = await client.db("courses-management");
    console.log('courses-management db connected');
}

connectDb();
const db = () => database;
module.exports.db = db;