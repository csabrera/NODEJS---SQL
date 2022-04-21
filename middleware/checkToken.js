import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario.js";

const checkToken = async (req, res, next) => {

  let token;
  
  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){

    try {

      token = req.headers.authorization.split(" ")[1];
      
      const decoded = jwt.verify(token, process.env.JWT_TOKEN);

      req.usuario = await Usuario.findByPk(decoded.id, {
        attributes: ['usuario', 'idpersonal', 'idrol', 'confirmado', 'estado'],
      });

      return next();
      
    } catch (error) {
      const e = new Error("Token no Válido");
      return res.status(403).json({ msg : e.message });
    }    

  }

  if(!token){
    const error = new Error("Token no Válido o inexistente");
    res.status(403).json({ msg : error.message });
  }

  next();

}

export default checkToken