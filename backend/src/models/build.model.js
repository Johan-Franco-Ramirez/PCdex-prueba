import { getConnection } from "../config/database.js";
import sql from "mssql";

export const getBuilds = async () => {

  const pool = await getConnection();

  const result = await pool.request()
    .query(`
      SELECT *
      FROM Build
    `);

  return result.recordset;
};

export const createBuild = async (build) => {

  const pool = await getConnection();

  await pool.request()

    .input("nombre_build", sql.VarChar, build.nombre_build)
    .input("descripcion", sql.VarChar, build.descripcion)
    .input("presupuesto_total", sql.Decimal(10,2), build.presupuesto_total)
    .input("id_usuario", sql.Int, build.id_usuario)

    .query(`
      INSERT INTO Build
      (
        nombre_build,
        descripcion,
        presupuesto_total,
        id_usuario
      )
      VALUES
      (
        @nombre_build,
        @descripcion,
        @presupuesto_total,
        @id_usuario
      )
    `);
};