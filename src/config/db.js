import mongoose from "mongoose";
import dotenv from "dotenv";

let conexion= "mongodb+srv://admin:ssHReUjcZM7I0e9J@sipidatabase.6qxipvo.mongodb.net"

dotenv.config({path:'../.env'});



const conectarDB = async () => {
  try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("DB conectada correctamente.");
  } catch (error) {
      console.log(error);
      process.exit(1);
  }
}

conectarDB()