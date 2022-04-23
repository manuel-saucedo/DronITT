const model = require('../models/nosql/user')
const express = require("express");
/*
obtiene las usuarios.
*/

exports.getData = (req, res) =>{
model.find({}, (err, docs) =>{
    res.send({
    docs
    })
})
}

/*
inserta los datos de los usuarios.
*/

exports.postData = (req, res) =>{
    const data =req.body
    model.create(data, (err, docs) =>{
        res.send({ data: docs })
    })
}
