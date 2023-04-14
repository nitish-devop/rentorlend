const Request = require("../models/Request");

module.exports.createRequest = async function(req,res){
    console.log(req.body)
    const request = await Request.create({
        name : req.body.name,
        days : req.body.days,
        price : req.body.price,
        description : req.body.description,
        user : req.user._id
    });
    res.status(200).json({
        request
    })

};