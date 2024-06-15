import mongoose from "mongoose";
import dotenv from "dotenv";

let conexion= "mongodb+srv://admin:ssHReUjcZM7I0e9J@sipidatabase.6qxipvo.mongodb.net"

dotenv.config({path:'./.env'});



const conectarDB = async () => {
  try {
     const cnx = await mongoose.connect(process.env.MONGODB_URI,{ 
      useNewUrlParser: true,
      useUnifiedTopology: true,
     });
      console.log(`MongoDB conectado: ${cnx.connection.host}`);
  } catch (error) {
      console.log(error);
      process.exit(1);
  }
}
console.log('Mongo URI:', process.env.MONGODB_URI);
export default conectarDB;