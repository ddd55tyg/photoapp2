const { addphoto, up, down, getphotos} = require('../services/photo.service')
const{uploadImg}=require("../common/uploadimg")



const router=require('express').Router()


router.post('/',uploadImg('path'),addphoto)
router.post('/up',up)
router.post('/down',down)
router.get('/',getphotos)



module.exports=router