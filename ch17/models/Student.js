import mongoose from 'mongoose'

// defining schema
const studentSchema = new mongoose.Schema({
   name:{type: String, required: true, trim: true},
   age:{type: Number, required: true, min: 18, max: 50},
   fees:{type:mongoose.Decimal128, required: true, validate: v=> v >= 5500.50},
   hobbies:{type: Array},
   isactive:{type: Boolean},
   comments:[{value:{type: String}, publish:{type: Date, default: Date.now}}],
   join:{type: Date, default: Date.now }
})

// to get information about particular field
// console.log(studentSchema.path('age'))

// compiling schema
const studentModel = mongoose.model('student', studentSchema)