const {MongoClient}=require('mongodb')

const url="mongodb://localhost:27017/"
const mongodbserverconnection = new MongoClient(url)

const mongodb=async()=>{
     let connection = await mongodbserverconnection.connect()
     let data = connection.db('Invoice').collection('Ivoice-data')

     return data
}

module.exports=mongodb