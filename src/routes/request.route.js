import { Router } from "express";
import * as RequestsController from "../controllers/request.controller.js";

const router=Router();


/** 
 * 
 * El get fue realizado por Luis Tang
 * 
*/

router.get('/',RequestsController.getRequests)

/** 
 * 
 * El post fue realizado por Lucia Pereyra
 * 
*/
router.post('/', RequestsController.createRequests)

/** 
 * 
 * El get by id fue realizado por Héctor Domínguez
 * 
*/
router.get('/:idSolicitud',RequestsController.getRequestById)



/** 
 * 
 * El put by id fue realizado por Héctor Domínguez
 * 
*/
router.put('/:idSolicitud',RequestsController.putRequestById)

/** 
 * 
 * El delete by id fue realizado por Cecilia Mogro
 * 
*/
router.delete('/:idSolicitud', RequestsController.deleteRequest)




export default router;