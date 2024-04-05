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

// compiling schema
const studentModel = mongoose.model('student', studentSchema) // here student is the name of the collection

const createDoc = async () =>{
   try {
      // Creating new document
const studentDoc = new studentModel({
   name: 'shikha',
   age: 20,
   fees: 8500.40,
   hobbies: ['playing cricket', 'dancing', 'swimming'],
   isactive: true,
   comments: [{value: "I am fine thanks for asking "}]
})

// Saving the document
 const result = await studentDoc.save()
 console.log(result)
   } catch (error) {
      console.log(error)
   }
}

// passing the parameters to create and save the document
// const createDoc = async (nm, ag, fe, hob, isact, comt) =>{
//    try {
//       // Creating new document
// const studentDoc = new studentModel({
//    name: nm,
//    age: ag,
//    fees: fe,
//    hobbies: hob,
//    isactive: isact,
//    comments:comt
// })

// // Saving the document
//  const result = await studentDoc.save()
//  console.log(result)
//    } catch (error) {
//       console.log(error)
//    }
// }

const createMultiDoc = async () =>{
   try {
const ankitDoc = new studentModel({
   name: 'ankit',
   age: 27,
   fees: 7500.40,
   hobbies: ['playing cricket', 'dancing', 'swimming'],
   isactive: true,
   comments: [{value: "I am well thanks for asking "}]
})
const gauravDoc = new studentModel({
   name: 'gaurav',
   age: 23,
   fees: 8550.40,
   hobbies: ['playing cricket', 'dancing', 'swimming', 'chess'],
   isactive: true,
   comments: [{value: "I am good"}]
})
const anuDoc = new studentModel({
   name: 'anu',
   age: 28,
   fees: 8588.40,
   hobbies: ['playing cricket', 'dancing', 'swimming', 'laughing'],
   isactive: true,
   comments: [{value: "I am good thanks for asking "}]
})

// Saving the multiple document
 const result = await studentModel.insertMany([ankitDoc, gauravDoc, anuDoc])
 console.log(result)
   } catch (error) {
      console.log(error)
   }
}

export  {createDoc, createMultiDoc }

