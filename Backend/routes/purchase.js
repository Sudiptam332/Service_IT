const express = require('express');
const router = express.Router();
const Purchase = require('../models/purchase');

router.get('/', (req, res)=> {
    const purchase = Purchase(req.body);
    purchase.save();
    res.send(req.body)
})

module.exports = router