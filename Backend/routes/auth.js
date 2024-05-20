const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
let fetchuser = require('../middleware/fetchuser')

router.post('/signup',[
    body('name').isLength({min: 3}),
    body('email').isEmail(),
    body('password').isLength({min: 5})
], async (req, res)=> {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({errors: result.array()});
    }
    
    let user  = User.findOne({email: req.body.email});
    if(!user){
        return res.status(400).json({error: "sorry, email already exists"})
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass
    }).then(user => res.json(user))
    .catch(err => {console.log(err)
    res.json({error: 'Please enter a unique value'})})
})

router.post('/login',[
    
    body('email', 'Enter Valid Email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res)=> {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({errors: result.array()});
    }

    const {email, password} = req.body;
    try{
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error: "Please Login with Correct Credentials"})
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare){
            return res.status(400).json({error: "Please Login with Correct Credentials"})
        }

        const data = {
            user: {
                id: user.id
            }
        }
        res.json({data})
    } catch(e){
        console.error(e.message);
        res.status(400).json({error: "Internal server Error"})
    }

})

router.get('/getuser', fetchuser, async (req, res)=> {
    
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({errors: result.array()});
    }

    try{
        let finduser = await User.findOne(req.user);
        if(!finduser){
            return res.status(400).json({error: "Please Login with Correct Credentials"})
        }

        res.json(finduser)
    } catch(e){
        console.error(e.message);
        res.status(400).json({error: "Internal server Error"})
    }

})
module.exports = router