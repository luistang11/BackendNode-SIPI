import * as RequestServices from '../services/request.service.js'
import { STATUS } from '../constants/constants.js'


export async function getProducts(req, res) {
  try {
    const response = await RequestServices.getProducts();
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
     console.log(req.body)
    await RequestServices.createRequest(req.body)
    res.status(200).send();
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al crear la solicitud.")
  }
}