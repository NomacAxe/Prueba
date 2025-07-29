require('dotenv').config()

const mysql = require("mysql2/promise");

const confibd = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false
  }
};
const conexionDB = mysql.createPool(confibd);

// Verificamos la conexión a la base de datos al iniciar la aplicación
(async () => {
  try {
    const connection = await conexionDB.getConnection();
    console.log('Conexion correcta!');
    connection.release(); // Devolvemos la conexión al pool
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
})();

const getconexion = () => {
  return conexionDB;
};
module.exports={getconexion};