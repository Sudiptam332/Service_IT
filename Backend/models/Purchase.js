const mongoose = require('mongoose');
const { Schema } = mongoose;

const PurchaseSchema = new Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number
        
    },
    projectDetails:{
        type: String,
        required: true
    },
    projectName:{
        type: String,
        required: true
    },
    document: {
        type: String
    }
  });

  module.exports = mongoose.model('purchase', PurchaseSchema);