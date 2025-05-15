const express = require('express');
const router = express.Router();
const Item=require('../models/Cliente');

router.post('/',async(req,res)=>{
    try{
        const item=new Item(req.body);
        await item.save();
        res.status(201).json(item);

    }catch(error){
        res.status(400).json({error: error.message})
    }
});

//consultar todos los 


router.get('/',async(req,res)=>{
    try{
        const item=await Item.find();
        res.json(item);

    }catch(error){
        res.status(500).json({error: error.message})
    }
});


//consultar por documento
router.get('/:id',async(req,res)=>{
    try{
        const item=await Item.findById(req.params.id);
        if (!item)return res.status(404).json({error: "Cliente no encontrado"});
        res.json(item);

    }catch(error){
        res.status(500).json({error: error.message})
    }
});

//modificar datos del producto
router.put('/:id',async(req,res)=>{
    try{
        const item=await Item.findByIdAndUpdate(req.params.id, req.body,{new:true});
        if (!item)return res.status(404).json({error: "Cliente no encontrado"});
        res.json(item);

    }catch(error){
        res.status(500).json({error: error.message})
    }
});

router.delete('/:id',async(req,res)=>{
    try{
        const item=await Item.findByIdAndDelete(req.params.id);
        if (!item)return res.status(404).json({error: "Cliente no encontrado"});
        res.json(item);

    }catch(error){
        res.status(500).json({error: error.message})
    }
});

module.exports = router;  