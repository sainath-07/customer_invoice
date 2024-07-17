const express=require('express')
const cors=require('cors')
const app=express()
const mongodb=require('./model.js')


// middleware
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.json({
        data: 'root page'
    })
})


app.post('/formdata',(req,res)=>{


const INSERT =async()=>{
      let data=await mongodb()
      let  insertData =await data.insertOne(req.body)
      console.log(insertData)
}
INSERT()
})

app.listen(5000,()=>{
    console.log('server is running')
})