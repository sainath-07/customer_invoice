// const {MongoClient}=require('mongodb')

// const url="mongodb+srv://sainathb308:@invoice.ef1eemd.mongodb.net/?retryWrites=true&w=majority&appName=Invoice"
// const mongodbserverconnection = new MongoClient(url)

// const mongodb=async()=>{
//      let connection = await mongodbserverconnection.connect()
//      let data = connection.db('Invoice').collection('Ivoice-data')

//      return data
// }

// module.exports=mongodb


const { MongoClient } = require('mongodb');

const url = "mongodb+srv://sainathb308:KSqHaJ8NO2CxwVqq@invoice.ef1eemd.mongodb.net/?retryWrites=true&w=majority&appName=Invoice";
const mongodbserverconnection = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const mongodb = async () => {
    try {
        let connection = await mongodbserverconnection.connect();
        console.log('Database connected successfully');
        let data = connection.db('Invoice').collection('Invoice-data');
        return data;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        // Implement any fallback logic here
        throw new Error('Failed to connect to MongoDB');
    }
};

module.exports = mongodb;
