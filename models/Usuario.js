import { DataTypes } from "sequelize";
import db from "../database/config.js";

const Usuario = db.define('usuarios', {
  usuario: {
    type: DataTypes.INTEGER
  },
  password: {
    type: DataTypes.STRING
  },
  confirmado: {
    type: DataTypes.TINYINT
  },
  idrol: {
    type: DataTypes.INTEGER
  },
  idpersonal: {
    type: DataTypes.INTEGER
  }
});

export default Usuario;