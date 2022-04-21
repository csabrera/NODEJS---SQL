import express from "express";
import cors from 'cors';

import tipoDocumentoRouter from '../routes/tipoDocumentoRoutes.js';
import personalRouter from '../routes/personalRoutes.js';
import rolRouter from '../routes/rolRoutes.js';

import db from '../database/config.js'

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //PAths para las rutas
    this.apiPaths = {
      tipoDocumentos: '/api/tipoDocumentos',
      personal: '/api/personal',
      roles: '/api/rol',
    }

    //Conectar a la base de Datos
    this.conectarDB();

    //Middlewares
    this.middleware();

    //Rutas de la aplicación
    this.routes();
  }

  async conectarDB(){

    try {
      await db.authenticate();
      console.log("Base da Datos conectado.");
    } catch (error) {
      throw new Error(error);
    }

  }

  middleware() {

    //CORS
    this.app.use( cors() );

    //Lectura y paseo del BODY
    this.app.use( express.json() );

    //Directorio Público
    this.app.use(express.static('public'));

  }

  routes() {

    this.app.use(this.apiPaths.tipoDocumentos, tipoDocumentoRouter);

    this.app.use(this.apiPaths.personal, personalRouter);

    this.app.use(this.apiPaths.roles, rolRouter);

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`)
    });
  }

}

export default Server;