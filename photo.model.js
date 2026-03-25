
const{Schema,model, Types}=require('mongoose')

const schema=Schema({
    path:String,
    createdBy:{
        type:Types.ObjectId,
        ref:"user",
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    count:{
        type:Number,
        default:0,
    },
    up:[{ type:Types.ObjectId,
        ref:"user",
    }],
      down:[{ type:Types.ObjectId,
        ref:"user",
    }],
})

module.exports=model('photo',schema)