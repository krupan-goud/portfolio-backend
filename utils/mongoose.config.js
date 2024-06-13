const mongoose = require('mongoose');
const env = require('dotenv');
env.config();

let count = 0;

const options = {
    maxPoolSize: 300,
    maxIdleTimeMS: 500,
    socketTimeoutMS: 45000,
};
mongoose.set('strictQuery', true);
const connectWithRetry = () => {
    console.log('MongoDB connection with retry')
    mongoose.connect(process.env.mongoDB_URL, options).then(() => {
        console.log('MongoDB is connected');
        console.log("MongoDb Connections", mongoose.connections.length)
    }).catch(err => {
        console.log(err);
        console.log('MongoDB connection unsuccessful, retry after 5 seconds. ', ++count, mongoose.connections.length);
    })
};

connectWithRetry();

