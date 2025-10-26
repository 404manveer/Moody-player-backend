const express = require('express');
const multer = require('multer');
const cors = require('cors')
const uploadFile = require('../service/storage.service');
const router = express.Router();
const songModel = require("../models/song.model")


const upload = multer({storage:multer.memoryStorage()});

router.use(cors())
router.post('/song',upload.single("audio"),async (req,res)=>{
    console.log(req.body);
    console.log(req.file);
    const filedata = await uploadFile(req.file);
    const song = await songModel.create({
        title:req.body.title,
        artist:req.body.artist,
        audio:filedata.url,
        mood:req.body.mood
    })


    res.status(201).json({ 
        msg:'song created succesfully',
        song:song,

    });
    

})

router.get("/song",async (req,res)=>{
    const {mood} = req.query;
    const song = await songModel.find({
        mood:mood
    })

    res.json({
        msg:"success",
        song:song,
    })
})



module.exports = router;
 