const mongoose=require('mongoose')
const Department=require('./department')
const Schema=mongoose.Schema

const EmployeeSchema=new Schema({

    name:{
        type:String
    },
    department:{
        type:Schema.Types.ObjectId,
        ref:'Department'
    }
})

// departmentSchema.post('save',function(next){
//     const department=this
//     department.employees.forEach(function(emp1){
//         Employee.findById(emp1.employee)
//         .then(employee=>{
//             employee.department.push({department:department._id})
//             employee.save()
//         })
//     })
//     next()

// })

EmployeeSchema.post('save',function(){
    const employee=this
    Department.findById(employee.department)
    .then(dprt=>{
        dprt.employees.push({employee:employee._id})
        dprt.save()
    })
    next()
    
})


const Employee=mongoose.model('Employee', EmployeeSchema)

module.exports=Employee