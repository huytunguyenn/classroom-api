const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.URI_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
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