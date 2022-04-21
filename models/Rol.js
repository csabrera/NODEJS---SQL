import { DataTypes } from "sequelize";
import db from "../database/config.js";

const Roles = db.define('roles', {
  descripcion: {
    type: DataTypes.STRING
  },
});

export default Roles;