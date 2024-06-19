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
        throw new Error(error.message);
    }
}

export function deleteRequest(id) {
    try {
        RequestRepository.deleteRequestRepo(id)
    } catch (error) {
        throw new Error(error.message);
    }
}

export function getRequestById(id) {
    try {
        return RequestRepository.getRequestByIdRepo(id);
    } catch (error) {
        throw new Error(error.message)
    }
}

export function putRequestById(id, solicitud) {
    try {
        return RequestRepository.putRequestByIdRepo(id, solicitud);
    } catch (error) {
        throw new Error(error.message)
    }
}



