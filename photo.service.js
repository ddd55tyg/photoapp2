
const photomodel=require('../models/photo.model')

module.exports.addphoto=async(req,res)=>{
    const {createdBy}=req.body;
    if(req.file){
 await photomodel.insertMany({createdBy,path:req.file.filename})
    res.json({message:"success"})
    }else{
            res.json({message:"image only"})

    }
   
}

module.exports.up=async(req,res)=>{
const{post_id,createdBy} =req.body;
let post =await photomodel.findOne({post_id, up:{$in:[createdBy]}})
    if(post){
   await photomodel.findByIdAndUpdate(post_id,{$inc :{ count: -1},$pull:{up:createdBy}});
    res.json({message:"liked"})
    }else{
    await photomodel.findByIdAndUpdate(post_id,{$inc :{ count: 1},$push:{up:createdBy},$pull:{down:createdBy}});
        res.json({message:"success"})

    }
}

module.exports.down=async(req,res)=>{
const{post_id,createdBy} =req.body;
let post = await photomodel.findOne({post_id, down:{$in:[createdBy]}})
    if(post){
   await photomodel.findByIdAndUpdate(post_id,{$inc :{ count: 1},$pull:{down:createdBy}});
    res.json({message:"liked"})
    }else{
    await photomodel.findByIdAndUpdate(post_id,{$inc :{ count: -1},$push:{down:createdBy},$pull:{up:createdBy}});
        res.json({message:"success"})

    }
}
module.exports.getphotos=async(req,res)=>{

    let PAGE_NUMBER=req.query.page
    if(!PAGE_NUMBER||PAGE_NUMBER<=0){
        PAGE_NUMBER=1
    }
    PAGE_LIMIT=5
    let skip=(PAGE_NUMBER-1)*PAGE_LIMIT;
let count = await photomodel.countDocuments({});
    let photos=await photomodel.find({}).sort({count: -1})
    .populate('createdBy up down','name  pic_url -_id')
    .skip(skip)
    .limit(PAGE_LIMIT)
    res.json({count,page:PAGE_NUMBER,photos})
};
