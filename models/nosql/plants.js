const mongoose = require("mongoose");
const PlantsScheme = new mongoose.Schema(

    {
    PlantID: {
        type: String,
        unique:true
    },
    NamePlant: {
        type: String
    }, 
    nmMax:{
        type:Number
    },
    nmMin:{
        type:Number
    },
    },
    {
    timestamps:true,
    versionKey:false,
    }
    );
    
    module.exports = mongoose.model("Register Plants", PlantsScheme)