const express=require('express')
const cors=require('cors')
const app=express()
const port=3003

const mongoose=require('./config/database')
const empolyeeRouter=require('./app/controllers/employeeController')
const departmentRouter=require('./app/controllers/departmentController')

app.use(express.json())
app.use(cors())

app.use('/employees', empolyeeRouter)
app.use('/departments', departmentRouter)

app.listen(port,()=>{
    console.log('listening to port',port)
})