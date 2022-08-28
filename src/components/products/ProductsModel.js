const mongoose = require("mongoose");
const { Schema } = mongoose;

const addPropertySchema = new Schema({
 PropertyTitle: String,
 Location: String,
 PropertyType: String,
 Size:String,
 FinishType: String,
 Bedrooms:Number,
 price:Number,
 imageUrl:String,
 token:String,
 createdAt: { type: Date, default: Date.now },
});

const addPropertys = mongoose.model('Propertys',addPropertySchema)

module.exports = addPropertys;
