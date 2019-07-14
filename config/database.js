const mongoose=require('mongoose')

mongoose.Promise=global.Promise

mongoose.connect('mongodb://localhost:27017/empolyee-app',{ useNewUrlParser: true })
.then(res=>{
    console.log('connecting to db')
})
.catch(err=>{
    console.log('err connecting to db')
})

module.exports=mongoose