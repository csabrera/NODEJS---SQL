import { request, response } from 'express';

import Roles from '../models/Rol.js';

const registrarRol = async (req = request, res = response) => {

  const { descripcion } = req.body;

  try {
    const rol = new Roles({descripcion});
    await rol.save();
    res.json(rol)
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg : "Hable con el administrador."
    })
  }

};

const obtenerRoles = async (req = request, res = response) => {

  const roles = await Roles.findAll();

  res.json({ roles })

};

export {
  registrarRol,
  obtenerRoles
}