import { Router } from "express";
import * as RequestsController from "../controllers/request.controller.js";

const router=Router();


/** 
 * 
 * El get fue realizado por Luis Tang
 * 
*/

router.get('/',RequestsController.getProducts)





router.get('/:idSolicitud')
router.post('/', RequestsController.createRequests)

router.put('/:idSolicitud')
router.delete('/:idSolicitud')






export default router;