import { response } from "express"
import Roles from "../models/Rol.js";

const esAdminRol = async (req, res = response, next) => {

  if( !req.usuario ){
    const e = new Error("Token no Válido");
    return res.status(403).json({ msg : e.message });
  }

  const { idrol: id } = req.usuario;

  const rolUsuarioLogin = await Roles.findByPk(id,{
    attributes: ['descripcion'],
  });

  if (rolUsuarioLogin.dataValues.descripcion !== 'ROL_ADMINISTRADOR'){
    const e = new Error("No tiene ROL DE ADMINISTRADOR");
    return res.status(403).json({ msg : e.message });
  }

  next();

}

const tieneRol = ( ...roles ) => {

  return async (req, res = response, next) => {

    if( !req.usuario ){
      const e = new Error("Token no Válido");
      return res.status(403).json({ msg : e.message });
    }

    const { idrol: id } = req.usuario;

    const rolUsuarioLogin = await Roles.findByPk(id,{
      attributes: ['descripcion'],
    });

    const rolData = rolUsuarioLogin.dataValues.descripcion;

    if (!roles.includes(rolData)){
      const e = new Error(`El servicio requiere uno de estos roles ${roles}`);
      return res.status(403).json({ msg : e.message });
    }

    next();

  }

}

export {
  esAdminRol,
  tieneRol
}