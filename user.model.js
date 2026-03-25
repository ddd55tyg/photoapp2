
const{Schema,model, Types}=require('mongoose')

const schema=Schema({
    name:String,
   email:String,
  password:String,
  verified:{
    type:Boolean,
    default:false,
  },
  age:{
    type:Number,
  },
pic_url:{
    type:String,
    default:"user.png"
},
})

module.exports=model('user',schema)