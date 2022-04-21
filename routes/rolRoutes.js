import express from 'express';
import { obtenerRoles, registrarRol } from '../controller/rolController.js';

const router = express.Router();

router.post('/', registrarRol);

router.get('/', obtenerRoles);

export default router;