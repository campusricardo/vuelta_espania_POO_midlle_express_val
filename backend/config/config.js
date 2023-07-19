const mongoose = require('mongoose');

const connectDB = async () => {
    try {
     const connectMongo = await mongoose.connect(process.env.MONGO_URI,{
         useNewUrlParser: true,
         useUnifiedTopology: true
     });
     const url = `Connected to the server in mongo ${connectMongo.connection.host} on the port ${connectMongo.connection.port}`;
     console.log(url);
    } catch (error) {
     console.log(`${error.message}`);
     process.exit(1);
    }
 }

 module.exports = connectDB;