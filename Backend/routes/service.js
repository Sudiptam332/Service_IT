const express = require('express');
const router = express.Router();
const Services = require('../models/Services');
const User = require('../models/User');

const Object = {
    user_id: "lol",
    order_id : "lol12"
}

router.get('/fetchAllServices', async(req, res)=> {
    try{
        const services = await Services.find();
        res.json(services);
    } catch(e){
        console.error(e.message);
        res.status(400).json({error: "Internal server Error"})
    }
})

router.get('/addServices', async(req, res)=> {
    try{
        const{serviceImage, title, description, includeServices, price, duration} = req.body;

        const service = new Services({serviceImage, title, description, includeServices, price, duration})

        const saveServices = service.save();
        res.json(saveServices)
    } catch(e){
        console.error(e.message);
        res.status(400).json({error: "Internal server Error"})
    }
})

module.exports = router