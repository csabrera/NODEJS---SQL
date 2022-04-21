import express from 'express';
import { check } from 'express-validator';
import bcrypt from 'bcrypt';

import { confirmarCuenta, ingresarPersonal, registrarPersonal, verPerfil } from '../controller/personalController.js';
import { validarConfirmacion, validarEmailExiste, validarEstadoUsuario, validarNumeroDocumentoExiste, validarPrimerPassword } from '../helpers/db-validators.js';

import validarCampos from '../middleware/validar-campos.js';
import checkToken from '../middleware/checkToken.js';
import { esAdminRol, tieneRol } from '../middleware/validar-roles.js';

const router = express.Router();

router.post('/registro', [
  check('nombres', 'El NOMBRE es obligatorio').not().isEmpty(),
  check('apellidos', 'Los APELLIDOS son obligatorio').not().isEmpty(),
  check('idtipodocumento', 'TIPO DE DOCUMENTO, No Válido.').isInt(),
  check('idtipodocumento', 'SELECCIONE TIPO DOCUMENTO').not().isEmpty(),
  check('numerodocumento', 'NÚMERO DE DOCUMENTO, No Válido.').isInt().isLength({ min: 8, max: 8}),
  check('numerodocumento').custom(validarNumeroDocumentoExiste),
  check('idsexo', 'TIPO SEXO, No Válido.').isInt(),
  check('idsexo', 'SELECCIONE TIPO SEXO').not().isEmpty(),
  check('email', 'El CORREO ingresado no es válido').isEmail(),
  check('email').custom(validarEmailExiste),
  check('fechanacimiento', 'La FECHA DE NACIMIENTO no es válido').not().isEmpty().isDate(),
  check('idoperadortelefonico', 'OPERADOR TELEFONICO, No Válido.').isInt(),
  check('idoperadortelefonico', 'SELECCIONE OPERADOR TELEFONICO, No Válido.').not().isEmpty(),
  check('numerotelefono', 'El NÚMERO DE TELEFONO es obligatorio').not().isEmpty().isLength({ min: 9, max: 9}),
  check('numerotelefono', 'El NÚMERO DE TELEFONO, No válido').isInt(),
  validarCampos
], registrarPersonal);

router.post('/confirmar', [
  check('usuario', 'El USUARIO es obligatorio').not().isEmpty(),
  check('usuario', 'El USUARIO, ingresado no es válido').isInt(),
  check('usuario', 'El USUARIO, Debe tener un minimo y maximo de 8 caracteres.').isLength({ min: 8, max: 8}),
  check('usuario').custom(validarConfirmacion),
  check('usuario').custom(validarEstadoUsuario),
  check('password', 'El PASSWORD es obligatorio').not().isEmpty(),
  validarCampos
], confirmarCuenta);

router.post('/ingresar',[
  check('usuario', 'El USUARIO es obligatorio').not().isEmpty(),
  check('usuario', 'El USUARIO, ingresado no es válido').isInt(),
  check('usuario', 'El USUARIO, Debe tener un minimo y maximo de 8 caracteres.').isLength({ min: 8, max: 8}),
  check('usuario').custom(validarPrimerPassword),
  check('usuario').custom(validarEstadoUsuario),
  check('password', 'El PASSWORD es obligatorio').not().isEmpty(),
  validarCampos
], ingresarPersonal);

router.get('/perfil', [
  checkToken, 
  //esAdminRol
  tieneRol('ROL_DIRECTOR', 'ROL_APODERADO')
], verPerfil);

export default router;