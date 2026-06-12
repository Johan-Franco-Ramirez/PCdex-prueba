import * as UsuarioModel from "../models/usuario.model.js";

export const getUsuarios = async (req, res) => {
  try {

    const usuarios = await UsuarioModel.getUsuarios();

    res.json(usuarios);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

export const getUsuarioById = async (req, res) => {

  try {

    const usuario = await UsuarioModel.getUsuarioById(req.params.id);

    res.json(usuario);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

export const createUsuario = async (req, res) => {

  try {

    await UsuarioModel.createUsuario(req.body);

    res.status(201).json({
      message: "Usuario creado"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

export const updateUsuario = async (req, res) => {

  try {

    await UsuarioModel.updateUsuario(
      req.params.id,
      req.body
    );

    res.json({
      message: "Usuario actualizado"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

export const deleteUsuario = async (req, res) => {

  try {

    await UsuarioModel.deleteUsuario(req.params.id);

    res.json({
      message: "Usuario eliminado"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};