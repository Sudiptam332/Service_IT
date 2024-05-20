const mongoose = require('mongoose');
const { Schema } = mongoose;

const ServicesSchema = new Schema({
    
    serviceImage:{
        type: String
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    includeServices:{
        type: String
    },
    price:{
        type: String,   
        required: true
    },
    duration:{
        type: String,
        required: true
    }
  });

  module.exports = mongoose.model('services', ServicesSchema);