const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema
({
    rollno:
    {
        type:Number,
        required:true
    },

    name: 
    {
        type: String,
        required: true
    },
    branch: 
    {
        type: String,
        required: true
    },
    promoted: 
   {
        type: Boolean,
        required: true,
        default: false
    },
    credits:
    {
        type:Number,
        required:true,
        default: 0
    }


})

module.exports = mongoose.model('student',studentSchema)












