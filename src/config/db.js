import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config({ path: './.env' });



const conectarDB = async () => {
  try {
    const cnx = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB conectado: ${cnx.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
export default conectarDB;