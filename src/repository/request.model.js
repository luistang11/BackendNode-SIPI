import conectarDB from "../config/db.js";
import {Request} from './Request.js';

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
    await newRequest.save();
  } catch (error) {
    console.log(error)
  }
}