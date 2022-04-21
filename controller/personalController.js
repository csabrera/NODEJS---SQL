import { request, response } from 'express';

import bcrypt from 'bcrypt';

import Personal from '../models/Personal.js';
import Usuario from '../models/Usuario.js';

import generarJWT from '../helpers/generarJWT.js';

const registrarPersonal = async (req = request, res = response) => {

  const { nombres, apellidos, idtipodocumento, numerodocumento, idsexo, email, domicilio, fechanacimiento, idoperadortelefonico,numerotelefono } = req.body;

  try {

    const personal = new Personal({nombres, apellidos, idtipodocumento, numerodocumento, idsexo, email, domicilio, fechanacimiento, idoperadortelefonico,
    numerotelefono});

    await personal.save();

    const usuario = new Usuario();
    usuario.usuario = numerodocumento;
    usuario.idpersonal = personal.id;
    usuario.idrol = 1;
    usuario.password = '123456';

    await usuario.save();

    res.status(200).json({
      msg : "PERSONAL registrado correctamente."
    });

  } catch (error) {

    console.log(error);
    res.status(500).json({
      msg : "Hable con el administrador."
    });

  }

};

const confirmarCuenta = async (req = request, res = response) => {

  const { usuario, password } = req.body;

  const salt = await bcrypt.genSaltSync(10);
  const newPass = await bcrypt.hash(password, salt)

  await Usuario.update({
    confirmado: 1,
    password: newPass
  }, {
    where: {
      usuario
    }
  });

  res.status(200).json({
    msg : "USUARIO confirmado correctamente."
  });

}

const ingresarPersonal = async (req = request, res = response) => {

  const { usuario, password } = req.body;

  try {

    //Verificar si existe en usuario (DNI)
    const usuarioLogin = await Usuario.findOne({
      where:{
        usuario
      }
    });

    if(!usuarioLogin) {
      const error = new Error(`El USUARIO ${usuario} no se encuentra regustrado.`);
      return res.status(404).json({ msg:error.message });
    }

    const validarPassword = await bcrypt.compare(password, usuarioLogin.password);
    if(!validarPassword) {
      const error = new Error(`La CLAVE ingresada es incorrecta.`);
      return res.status(404).json({ msg:error.message });
    }

    res.json({
      token: generarJWT(usuarioLogin.id),
    })
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg : "Hable con el administrador."
    });
  }

  
}

const verPerfil = async (req = request, res = response) => {
  
  const { usuario } = req;

  res.json({ PerfilLogin: usuario });

}

export {
  registrarPersonal,
  ingresarPersonal,
  confirmarCuenta,
  verPerfil
}