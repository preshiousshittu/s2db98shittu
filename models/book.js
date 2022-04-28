const mongoose = require("mongoose") 
const bookSchema = mongoose.Schema({ 
 name: String ,
 length: {type:Number, min:25, max:200}, 
 author: {type:String, required:true}
 
}) 
 
module.exports = mongoose.model("Book", 
bookSchema) 

