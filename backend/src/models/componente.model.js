import { getConnection } from "../config/database.js";
import sql from "mssql";

export const getComponentes = async () => {

  const pool = await getConnection();

  const result = await pool.request()
    .query(`
      SELECT *
      FROM Componente
    `);

  return result.recordset;
};

export const createComponente = async (componente) => {

  const pool = await getConnection();

  await pool.request()

    .input("nombre", sql.VarChar, componente.nombre)
    .input("marca", sql.VarChar, componente.marca)
    .input("modelo", sql.VarChar, componente.modelo)
    .input("categoria", sql.VarChar, componente.categoria)
    .input("especificaciones", sql.NVarChar, componente.especificaciones)
    .input("stock", sql.Int, componente.stock)

    .query(`
      INSERT INTO Componente
      (
        nombre,
        marca,
        modelo,
        categoria,
        especificaciones,
        stock
      )
      VALUES
      (
        @nombre,
        @marca,
        @modelo,
        @categoria,
        @especificaciones,
        @stock
      )
    `);
};