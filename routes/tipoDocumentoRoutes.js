import express from 'express';
import { getAllTipoDocumento, registrarTipoDocumento } from '../controller/tipoDocumentoController.js';

const router = express.Router();

router.post('/', registrarTipoDocumento);

router.get('/', getAllTipoDocumento);

export default router;
