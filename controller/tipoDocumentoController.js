import { request, response } from 'express';

import Documento from '../models/tipoDocumento.js';

const registrarTipoDocumento = async (req = request, res = response) => {

  const { descripcion } = req.body;

  try {
    const documento = new Documento({descripcion});
    await documento.save();
    res.json(documento)
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg : "Hable con el administrador."
    })
  }

};

const getAllTipoDocumento = async (req = request, res = response) => {

  const documentos = await Documento.findAll();

  res.json({ documentos })

};

export {
  registrarTipoDocumento,
  getAllTipoDocumento
}