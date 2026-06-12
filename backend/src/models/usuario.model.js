import { getConnection } from "../config/database.js";
import sql from "mssql";

export const getUsuarios = async () => {

  const pool = await getConnection();

  const result = await pool.request()
    .query(`
      SELECT *
      FROM Usuario
    `);

  return result.recordset;
};

export const getUsuarioById = async (id) => {

  const pool = await getConnection();

  const result = await pool.request()
    .input("id", sql.Int, id)
    .query(`
      SELECT *
      FROM Usuario
      WHERE id_usuario = @id
    `);

  return result.recordset[0];
};

export const createUsuario = async (usuario) => {

  const pool = await getConnection();

  await pool.request()

    .input("nombre", sql.VarChar, usuario.nombre)
    .input("email", sql.VarChar, usuario.email)
    .input("password_hash", sql.VarChar, usuario.password_hash)
    .input("id_rol", sql.Int, usuario.id_rol)

    .query(`
      INSERT INTO Usuario
      (
        nombre,
        email,
        password_hash,
        id_rol
      )
      VALUES
      (
        @nombre,
        @email,
        @password_hash,
        @id_rol
      )
    `);
};

export const updateUsuario = async (id, usuario) => {

  const pool = await getConnection();

  await pool.request()

    .input("id", sql.Int, id)
    .input("nombre", sql.VarChar, usuario.nombre)
    .input("email", sql.VarChar, usuario.email)

    .query(`
      UPDATE Usuario
      SET
        nombre=@nombre,
        email=@email
      WHERE id_usuario=@id
    `);
};

export const deleteUsuario = async (id) => {

  const pool = await getConnection();

  await pool.request()
    .input("id", sql.Int, id)
    .query(`
      DELETE FROM Usuario
      WHERE id_usuario=@id
    `);
};