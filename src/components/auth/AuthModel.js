const mongoose = require("mongoose");
const { Schema } = mongoose;

const addUserSchema = new Schema({
 name:    String,
 password: String,
 mobileNo: String,
 createdAt: { type: Date, default: Date.now },
});

const authUser = mongoose.model('authUsers',addUserSchema)

module.exports = authUser;
