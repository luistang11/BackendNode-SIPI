import { Router } from "express";
import * as RequestsController from "../controllers/request.controller";

const router=Router();


/** 
 * 
 * El get fue realizado por Luis Tang
 * 
*/

router.get('/',RequestsController.getProducts)





router.get('/:idSolicitud')
router.post('/')
router.put('/:idSolicitud')
router.delete('/:idSolicitud')






export default router;