import mongoose from 'mongoose'

// defining schema
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18, max: 50 },
    fees: { type: mongoose.Decimal128, required: true, validate: v => v >= 5500.50 },
    hobbies: { type: Array },
    isactive: { type: Boolean },
    comments: [{ value: { type: String }, publish: { type: Date, default: Date.now } }],
    join: { type: Date, default: Date.now }
})

// Compiling schema
const studentModel = mongoose.model('student', studentSchema)

// Retrieve all document
const getAllDoc = async () => {
    const result = await studentModel.find()
    console.log(result)
    // result.forEach(
    //     (item) => console.log(
    //         item.name,
    //         item.age,
    //         item.fees.toString(),
    //         item.hobbies[0],
    //         item.hobbies[1],
    //         item.isactive,
    //         item.comments[0].value,
    //         item.comments[0].publish,
    //         item.join
    //     ))
}

// Retrieve all document with specific fields
const getAllDocSpecificField = async () => {
    const result = await studentModel.find().select('name age fees') // include
    // const result = await studentModel.find().select(['name', 'age']) // include
    // const result = await studentModel.find().select({ name: 1, age: 1}) // include 

    // const result = await studentModel.find().select('-name -age') // exclude
    // const result = await studentModel.find().select(['-name', '-age']) // exclude
    // const result = await studentModel.find().select({ name: 0, age: 0}) // exclude 

    // const  result = await studentModel.find({}, 'name age')
    console.log(result)
}

// Retrieve Single document
const getSingleDoc = async () => {
    const result = await studentModel.findById("65a790ed3b99dca5a2aef892")
    // console.log(result)
    console.log(result._id.getTimestamp(), result.name, result.age, result.fees.toString())
}

// Retrieve Single document with specific field
const getSingleDocSpecificField = async () => {
    const result = await studentModel.findById("65a790ed3b99dca5a2aef892", 'name age')
    console.log(result)
}

// Retrieve document by field
const getDocByField = async () => {
    const result = await studentModel.find({ name: 'Utkarsh' })
    // const result = await studentModel.find({ age: 22 })
    console.log(result)
    // console.log(result[0].name, result[0].age, result[0].fees.toString())
}

// Retrieve document by field with specific field
const getDocByFieldSpecificField = async () => {
    const result = await studentModel.find({ name: 'Utkarsh' }).select('name age')
    // const result = await studentModel.find({ name: 'Utkarsh'}, 'name age')
    console.log(result)
}

// Retrieve limited document
const getLimitedDoc = async () => {
    const result = await studentModel.find().limit(4)
    // const result = await studentModel.find({}, null, { limit: 2})
    console.log(result)
}

// Retrieve skip document
const getSkipDoc = async () => {
    const result = await studentModel.find().skip(1)
    // const result = await studentModel.find({}, null, { skip: 1})
    console.log(result)
}

// Count documents
const getCountDoc = async () => {
    const result = await studentModel.find().countDocuments()
    console.log(result)
}

// Sort documents
const getSortedDoc = async () => {
    // const result = await studentModel.find().sort({age: 1}) // in ascending order
    // const result = await studentModel.find().sort({age: -1}) // in descending order
    console.log(result)
}

// Mix documents
const mixDoc = async () => {
 const result = await studentModel.find({}, { name:1, age: 1 }, {limit: 5, skip: 1})
 console.log(result)
}

// Comparison Query Operator
const compDoc = async () => {
// const result = await studentModel.find({age: {$gt: 23}}) // age greater than 23
// const result = await studentModel.find({age: {$gte: 22}}) // age greater than or equal to 22 
// const result = await studentModel.find({age: {$lt: 26}}) // age less than 26 
// const result = await studentModel.find({age: {$lte: 24}}) // age less than or equal to 24
// const result = await studentModel.find({age: {$ne: 20}}) // age not equal to 20 
// const result = await studentModel.find({age: {$in: [22, 27]}}) // age of 22 and 27 will get printed
// const result = await studentModel.find({age: {$nin: [22, 27]}}) // other than 222 and 27

console.log(result)
}

// Logical Querry Operator
const logDoc = async () => {
    // const result = await studentModel.find({
    //     $and: [{ age: 22}, { fees: 6500.4}]
    // }) // if both field will match then only it will print 

    // const result = await studentModel.find({
    //     $or: [{ age: 22}, { fees: 6.4}]
    // }) // if any one matches it will print

    // const result = await studentModel.find({ $and: [{ age: { $gt: 20}}, { fees: 6500.4}]})
     // both should match

    // const result = await studentModel.find({ $or: [{ age: { $gt: 20}}, { fees: 6500.4}]})
  // any should match

    // const result = await studentModel.find({ age: {$not: {$gt: 22}}}) // do not print whose age is greater than 22 

    // const result = await studentModel.find({ $nor: [{ age: 22 }, { fees: 6500.4}]}) // will print who don't have wither age or fee of 22 and 6500.4

      console.log(result) 
    }

export { getAllDoc, getAllDocSpecificField, getSingleDoc, getSingleDocSpecificField, getDocByField, getDocByFieldSpecificField, getLimitedDoc, getSkipDoc, getCountDoc, getSortedDoc, mixDoc, compDoc, logDoc }

