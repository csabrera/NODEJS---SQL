import { Sequelize } from "sequelize";

const db = new Sequelize('colegio', 'csabrera', 'root',{
  host: 'localhost',
  dialect: 'mysql'
});

export default db;