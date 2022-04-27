const mongoose = require("mongoose") 
const bookSchema = mongoose.Schema({ 
 name: String ,
 length: Number, 
 author: String
 
}) 
 
module.exports = mongoose.model("Book", 
bookSchema) 

