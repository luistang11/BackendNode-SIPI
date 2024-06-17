import * as RequestRepository from '../repository/request.model.js'

export function getRequests() {
    try {
        return RequestRepository.getRequestRepo();
    } catch (error) {
        throw new Error(error.message)
    }
}

export function createRequest(request) {
    try {
        RequestRepository.createRequestRepo(request);
    } catch (error) {
        console.log(error);
    }
}

export function deleteRequest (id)  {
    try {
         RequestRepository.deleteRequestRepo(id)
    }catch (error) {
        console.log(error);
    }
}

