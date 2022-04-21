

import { Op } from 'sequelize';

import Personal from '../models/Personal.js';
import Usuario from '../models/Usuario.js';

//Verificar si el correo existe
const validarEmailExiste = async(email = '') => {
  const existeEmail = await Personal.findOne({ email });

  if(existeEmail) {
    throw new Error(`El correo ${email}, se encuentra registrado`);
  }
}

//Verificar SI EL USUARIO ESTA ACTIVO
const validarEstadoUsuario = async(usuario = '') => {

  const validarEstado = await Usuario.findOne({
    where: {
      [Op.and] : [
        {usuario},
      ],
      [Op.and] : [
        {estado: 0},
      ]
    }
  }); 

  if(validarEstado) {
    throw new Error(`El USUARIO ${usuario}, no esta habilitado.`);
  }

}

//Verificar si el NUMERO DE DNI EXISTE
const validarNumeroDocumentoExiste = async(numerodni = '') => {

  const existeNumDni = await Personal.findOne({ numerodni });

  if(existeNumDni) {
    throw new Error(`El NÚMERO DE DNI ${numerodni}, se encuentra registrado`);
  }

}

//VERIFICAR SI EL PASSWORD ESTA DEL 1 AL 6 (PRIMERA SESIÓN DEBE CONFIRMA LA CUENTA)
const validarPrimerPassword = async(usuario = '') => {

  const primeraSesion = await Usuario.findOne({
    where: {
      [Op.and] : [
        {usuario},
      ],
      [Op.and] : [
        {estado: 1},
      ],
      [Op.and] : [
        {password: '123456'},
      ],
      [Op.and] : [
        {confirmado: 0},
      ]
    }
  });  

  if(primeraSesion) {
    throw new Error(`FALTA CONFIRMAR CUENTA`);
  }

}

//VERIFICAR SI EL USUARIO ESTA APTO PARA CORFIRMAR CUENTA
const validarConfirmacion = async(usuario = '') => {

  const validarConfirmacion = await Usuario.findOne({
    where: {
      [Op.and] : [
        {usuario},
      ],
      [Op.and] : [
        {estado: 1},
      ],
      [Op.and] : [
        {confirmado: 1},
      ]
    }
  });  

  if(validarConfirmacion) {
    throw new Error(`EL USUARIO INGRESADO YA ESTÁ CONFIRMADO`);
  }

}

export {
  validarEmailExiste,
  validarNumeroDocumentoExiste,
  validarPrimerPassword,
  validarConfirmacion,
  validarEstadoUsuario
}

