const Pool = require("pg").Pool;
// const url = require("url");

const connectionString =
  process.env.DATABASE_URL || "postgres://localhost:5432";
const config = {
  connectionString: connectionString,
  ssl: { rejectUnauthorized: false },
};
const pool = new Pool(config);
var count = 0;

pool.on("connect", (client) => {
  client.count = count++;
  console.info("count conection ->", count);
});

exports.pool = pool;
