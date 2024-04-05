import mongoose from 'mongoose';
 
const connectDB = async (DATABASE_URL) => {
    try {
      //  await mongoose.connect(DATABASE_URL);

      const DB_OPTIONS = {
        user:'geekyshows',
        pass:'mypassword',
        dbName: 'schooldb',
        authSource: 'schooldb' // geekyshows user is created in the schooldb database
      }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("Connected Successfully...");
    } catch (err) {
        console.log(err);
    }
}

export default connectDB