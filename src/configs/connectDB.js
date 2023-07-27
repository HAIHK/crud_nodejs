import mysql from "mysql2/promise";

console.log("Creating connecting pool...");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "nodejs",
});

export default pool;
