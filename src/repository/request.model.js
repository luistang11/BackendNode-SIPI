import conectarDB from "../config/db.js";
import { Request } from './Request.js';

conectarDB();

export async function getRequestRepo() {
  try {
    let request = await Request.find().lean();
    console.log(request);
    return request;
  } catch (error) {
    console.log(error);
  }
}


export async function createRequestRepo(request) {
  try {
    let newRequest = new Request(request);
    return await newRequest.save();
  } catch (error) {
    throw new Error(error.message);
  }
}


export async function deleteRequestRepo(id) {
  try {
    return await Request.findOneAndDelete({ _id: id });
  } catch (error) {
    throw new Error(error.message);
  }
}


export async function getRequestByIdRepo(id) {
  try {
    let request = await Request.findById(id);
    return request;
  } catch (error) {
    throw new Error(error.message)
  }
}

export async function putRequestByIdRepo(id, solicitud) {
  try {
    let request = await Request.findByIdAndUpdate(id, solicitud);
    return request;
  } catch (error) {
    throw new Error(error.message)
  }
}