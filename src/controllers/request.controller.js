import * as RequestServices from '../services/request.service.js'
import {STATUS} from '../constants/constants.js'


export async function getProducts(req, res) {
    try {
      const response = await RequestServices.getProducts();
      res.json({
          products: response,
          status:STATUS.SUCCESS,
  
      });
    } catch (error) {
      res.status(400).json({ 
          error: error.message,
          ststus:STATUS.FAIL
      })
    }
  }