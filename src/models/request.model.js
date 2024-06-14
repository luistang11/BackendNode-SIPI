import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete";

const schema = new mongoose.Schema(
    {
      codigoComputadora: {
        type: Number,
        required: true,
      },
      programas:{
        type: Array,
      },
      
    },
    { timestamps: true }
  );
  
  schema.plugin(mongooseDelete, { deletedAt: true });
  
  export const Request = mongoose.model("solicitudes", schema);