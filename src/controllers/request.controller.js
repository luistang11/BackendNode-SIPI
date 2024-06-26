import * as RequestServices from '../services/request.service.js'
import { STATUS } from '../constants/constants.js'


export async function getRequests(req, res) {
  try {
    const response = await RequestServices.getRequests();
    res.json({
      products: response,
      status: STATUS.SUCCESS,

    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      ststus: STATUS.FAIL
    })
  }
}

export async function createRequests(req, res) {
  try {
    const { programas, fecha, cantidad, materia, descripcion } = req.body;
    if (!programas || !fecha || !cantidad || !materia || !descripcion) {
      return res.status(400).json({ message: 'Todos los campos son requeridos.', status: STATUS.FAIL });
    }
    const data = await RequestServices.createRequest(req.body)
    res.status(201).json({ message: "Solicitud creada exitosamente", request: data });

  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor. Intente nuevamente más tarde.', status: STATUS.FAIL })
  }
}


export async function deleteRequest(req, res) {
  let idSolicitud = req.params.idSolicitud;
  try {
    const solicitudResp = await RequestServices.getRequestById(idSolicitud);
    if (solicitudResp) {
      let resp = await RequestServices.deleteRequest(idSolicitud);
      res.status(200).json({
        request: resp,
        mensaje: "La solicitud se eliminó con éxito",
        status: STATUS.SUCCESS
      });

    } else {
      res.status(404).json({
        mensaje: "Solicitud no encontrada",
        status: STATUS.FAIL
      })
    }

  } catch (error) {
    res.status(500).json({
      error: error.message,
      ststus: STATUS.FAIL
    })
  }
}

export async function getRequestById(req, res) {
  const idSolicitud = req.params.idSolicitud
  try {
    const response = await RequestServices.getRequestById(idSolicitud);
    if (response) {
      res.status(200).json({
        request: response,
        status: STATUS.SUCCESS,
      });
    } else {
      res.status(404).json({
        message: 'Solicitud no encontrada',
        status: STATUS.FAIL,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
      ststus: STATUS.FAIL
    })
  }
}

export async function putRequestById(req, res) {
  const idSolicitud = req.params.idSolicitud;
  const solicitud = req.body;
  try {

    const solicitudResponse = await RequestServices.getRequestById(idSolicitud);

    if (solicitudResponse) {
      const response = await RequestServices.putRequestById(idSolicitud, solicitud);
      res.status(202).json({
        request: response,
        status: STATUS.SUCCESS,
      });

    } else {
      res.status(404).json({
        message: 'Solicitud no encontrada',
        status: STATUS.FAIL,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
      ststus: STATUS.FAIL
    })
  }
}
