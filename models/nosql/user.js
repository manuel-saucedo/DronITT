const mongoose =require("mongoose");
const UsersScheme = new mongoose.Schema(

{
name: {
    type: String
},
ID: {
    type: String,
    unique:true
}, 
email:{
    type:String,
    unique:true
},
password:{
    type:String
},
/*role:{
    type: ["user","admin"],
    default: "user",
},*/
},
{
timestamps:true,
versionKey:false,
}
);

module.exports = mongoose.model("Register users", UsersScheme)