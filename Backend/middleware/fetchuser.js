const fetchuser = (req, res, next)=>{
    const token = req.body
    if(!token){
        res.status(401).send({error: "Please authenticate using valid token"})
    }
    try{
        req.user = token
        next();
    } catch{
        res.status(401).send({error: "Please authenticate using valid token"})
    }
    
}

module.exports = fetchuser