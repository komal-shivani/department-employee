const mongoose=require('mongoose')

const Schema=mongoose.Schema

const departmentSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    employees:[{
        employee:{
            type:Schema.Types.ObjectId,
            ref:'Employee'
        }
    }]
})



const Department=mongoose.model('Department', departmentSchema)

module.exports=Department

