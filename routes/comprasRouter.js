const mongodb = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Rios:elefante1@demeter.1ioyyf1.mongodb.net/?retryWrites=true&w=majority"

const response = require('../network/response.js');

router = express.Router();


// find
router.get('/', async (req, res) =>{
    const client= new MongoClient(uri);
    try{
        await client.connect()
        const result = await client.db('Demeter').collection('compras').find().limit(20).toArray();
        //res.status(200).send(result)
        if(result){
            response.success(req, res, "si hay copras", 200)
        }
        else{
            response.error(req,res, "no hay compras wtf", 404);
        }
    }finally{
        await client.close()
    }

})


module.exports = router;
