import { DataTypes } from "sequelize";
import db from "../database/config.js";

const Personal = db.define('personales', {
  nombres: {
    type: DataTypes.STRING
  },
  apellidos: {
    type: DataTypes.STRING
  },
  idtipodocumento: {
    type: DataTypes.INTEGER
  },
  numerodocumento: {
    type: DataTypes.INTEGER
  },
  idsexo: {
    type: DataTypes.INTEGER
  },
  email: {
    type: DataTypes.STRING
  },
  domicilio: {
    type: DataTypes.STRING
  },
  fechanacimiento: {
    type: DataTypes.DATE
  },
  idoperadortelefonico: {
    type: DataTypes.INTEGER
  },
  numerotelefono: {
    type: DataTypes.INTEGER
  },
  estado: {
    type: DataTypes.TINYINT
  }
});

export default Personal;