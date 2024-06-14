import {Request} from '../models/request.model'


export async function getRequests(){
    try {
        const request= await Request.find().lean();
        return request
    } catch (error) {
        throw new Error(error.message)
    }
}
