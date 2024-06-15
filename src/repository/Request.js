import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete";

const schema = new mongoose.Schema(
    {
      programas:{
        type: Array,
      },
      fecha:{
        type: Date,
      },
      cantidad: {
        type: Number,
      },
      materia:{
        type: String,
      },
      descripcion:{
        type: String,
      }
    },
    { timestamps: true }
  );

  schema.plugin(mongooseDelete, { deletedAt: true });
  
  export const Request = mongoose.model("solicitudes", schema);