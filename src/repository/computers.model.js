import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete";

const schema = new mongoose.Schema(
    {
      codigoComputadora: {
        type: Number,
        required: true,
      },
    },
    { timestamps: true }
  );
  
  schema.plugin(mongooseDelete, { deletedAt: true });
  
  export const Computers = mongoose.model("computadoras", schema);