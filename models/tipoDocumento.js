import { DataTypes } from "sequelize";
import db from "../database/config.js";

const TipoDocumento = db.define('tipodocumento', {
  descripcion: {
    type: DataTypes.STRING
  },
});

export default TipoDocumento;