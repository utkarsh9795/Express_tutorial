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

// Update Document
const updateDocById = async (id) => {
    try {
    //    const result = await studentModel.findByIdAndUpdate(id, { name: "Ram"}); 
    const result = await studentModel.findByIdAndUpdate(id, { name: "Shyam"}, {returnDocument:"after"});
       console.log(result)
    } catch (error) {
       console.log(error) 
    }
};

// Update one document
const updateOneDoc = async (id) => {
    try {
        const result = await studentModel.updateOne({_id:id}, { name: "Laxman"});
    //    const result = await studentModel.updateOne(
    //     {_id:id},
    //      { name: "Kabir"},
    //       {upsert: true}
    //       );
       console.log(result)
    } catch (error) {
       console.log(error) 
    }
};

const updateOneDocByAge = async (a) => {
    try {
        const result = await studentModel.updateOne({age:a}, { name: "Jerry"});
    
       console.log(result)
    } catch (error) {
       console.log(error) 
    }
};

const updateManyDoc = async (a) => {
    try {
        // const result = await studentModel.updateMany({age:a}, { name: "Dollar"});
        const result = await studentModel.updateMany({age:a}, { name: "Maths"}, {upsert:true});
       console.log(result)
    } catch (error) {
       console.log(error) 
    }
};

export { updateDocById, updateOneDoc, updateOneDocByAge, updateManyDoc }


// Learnings from this lecture

// to see updated document in the console use returnDocument after which will print updated one