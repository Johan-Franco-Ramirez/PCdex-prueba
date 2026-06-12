import sql from "mssql";

const config = {
  server: "(localdb)\\MSSQLLocalDB",

  database: "PCdex",

  options: {
    trustServerCertificate: true
  }
};

export const getConnection = async () => {
  try {

    const pool = await sql.connect(config);

    console.log("✅ Conectado a PCdex");

    return pool;

  } catch (error) {

    console.error("❌ Error SQL:", error);

    throw error;
  }
};