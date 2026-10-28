const router = require("express").Router();
const verifyToken = require('../middleware/verifyToken')
const Entry = require('../models/Entry')

router.post('/',verifyToken, async (req,res)=>{
    try{
        // Logged in user is ALWAYS req.user
        const newEntry = await Entry.create({
            title: req.body.title,
            entryBody: req.body.entryBody,
            isPublic: req.body.isPublic,
            owner: req.user._id
        })
        res.status(201).json(newEntry)
    }catch(err){
        console.log(err)
    }
})


router.get('/', async (req,res)=>{
    try{
        // Logged in user is ALWAYS req.user
        const allEntries = await Entry.find({isPublic: true})
        res.status(200).json(allEntries)
    }catch(err){
        console.log(err)
    }
})



router.get('/:entryId', verifyToken, async (req,res)=>{
    try{
        // Logged in user is ALWAYS req.user
        const entry = await Entry.findById(req.params.entryId)
        res.status(200).json(entry)
    }catch(err){
        console.log(err)
    }
})




router.put("/:entryId",async (req,res)=>{
    try{
         const foundEntry = await Entry.findById(req.params.entryId);
         if ( foundEntry.owner== req.user._id){
        const updatedEntry = await Entry.findByIdAndUpdate(req.params.entryId, req.body, {new:true})
        res.json(updatedEntry)}
        else{
             return res.status(403).json({message:'You cannot update this Entry'})
        }

    }catch(err){
        console.log(err);

    }
})

router.delete("/:entryId", verifyToken,async (req,res)=>{
     try{
 const foundEntry = await Entry.findById(req.params.entryId);
         if ( foundEntry.owner== req.user._id) {
        const deletedEntry = await Entry.findByIdAndDelete(req.params.entryId)
        res.json(deletedEntry)}
        else{
             return res.status(403).json({message:'You cannot delete this entry'})
        }
    }catch(err){
        console.log(err);
    }
})





    





module.exports = router;