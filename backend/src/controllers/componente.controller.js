import * as ComponenteModel from "../models/componente.model.js";

export const getComponentes = async (req, res) => {

  try {

    const componentes =
      await ComponenteModel.getComponentes();

    res.json(componentes);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

export const createComponente = async (req, res) => {

  try {

    await ComponenteModel.createComponente(
      req.body
    );

    res.status(201).json({
      message: "Componente creado"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};