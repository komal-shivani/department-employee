const express=require('express')
const router=express.Router()
const Employee=require('../models/employee')

router.get('/',(req,res)=>{
    Employee.find()
    .then(employees=>res.json(employees))
    .catch(err=>res.json(err))
})
router.post('/',(req,res)=>{
    const body=req.body
    console.log(body)
    const employee=new Employee(body)
    employee.save()
    .then(employee=> res.json(employee))
    .catch(err=> res.json(err))
})
router.get('/:id', (req,res)=>{
    const id=req.params.id
    Employee.findById(id).populate('department')
    .then(employee=>res.json(employee))
    .catch(err=> res.json(err))
})
router.put('/:id',(req,res)=>{
    const id=req.params.id
    const body=req.body
    Employee.findByIdAndUpdate(id, body,{new:true})
    .then(employee=>res.json(employee))
    .catch(err=> res.json(err))
})

router.delete('/:id',(req,res)=>{
    const id=req.params.id
    Employee.findByIdAndDelete(id)
    .then(employee=> res.json(employee))
    .catch(err=> res.json(err))
})

module.exports=router