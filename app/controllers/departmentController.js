const express=require('express')
const router=express.Router()
const Department=require('../models/department')

router.get('/',(req,res)=>{
   Department.find()
    .then(departments=>res.json(departments))
    .catch(err=>res.json(err))
})
router.post('/',(req,res)=>{
    const body=req.body
    // console.log(body)
    const department=new Department(body)
    department.save()
    .then(department=> res.json(department))
    .catch(err=> res.json(err))
})
router.get('/:id', (req,res)=>{
    const id=req.params.id
    console.log(id)
   Department.findById(id).populate('employees.employee')
    .then((department)=> {
        console.log(department)
        res.json(department)
        }
       )
    .catch(err=> res.json(err))
})
router.put('/:id',(req,res)=>{
    const id=req.params.id
    const body=req.body
   Department.findByIdAndUpdate(id, body,{new:true})
    .then(department=>res.json(department))
    .catch(err=> res.json(err))
})

router.delete('/:id',(req,res)=>{
    const id=req.params.id
   Department.findByIdAndDelete(id)
    .then(department=> res.json(department))
    .catch(err=> res.json(err))
})

module.exports=router