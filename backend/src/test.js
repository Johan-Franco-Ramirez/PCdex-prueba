import { getConnection } from "./config/database.js";

try {

  const pool = await getConnection();

  const result = await pool.request()
    .query("SELECT * FROM Rol");

  console.log(result.recordset);

} catch (error) {

  console.error(error);

}