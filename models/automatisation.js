const mongoose = require('mongoose')

const AutomatisationSchema = new mongoose.Schema({

    IdEntreprise:{
        type:String,
        required: true,
    },
    validation:{
        type: Boolean,
        required: true,
    },
    declancheur:{
        type: String,
        required: true,
    },
    action: {
        type: String,
        required: true,
    },    

     },
      
     { timestamps: true }
     
     )

module.exports = mongoose.model("Automatisation", AutomatisationSchema)