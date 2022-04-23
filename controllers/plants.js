const model = require('../models/nosql/plants')
const express = require("express");
/* 
obtiene las plantas.
*/

exports.getData = (req, res) =>{
model.find({}, (err, docs) =>{
    res.send({
    docs
    })
})
}
/*
inserta los datos de las plantas.
*/
exports.postData = (req, res) =>{
    const data =req.body
    /*model.create(data, (err, docs) =>{
        res.send({ data: docs })
       
    })*/
    
}