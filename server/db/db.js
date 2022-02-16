const Sequelize = require("sequelize");
require("dotenv").config();

const username = "postgres";
const host = "localhost";
const dialectName = "postgres";
const database = "messenger";
const password = "meetpatel";

const db = new Sequelize(
  database,
  username,
  password || "postgres://localhost:5432/messenger",
  {
    host,
    password,
    dialectName,
    ssl: "meetpatel",
  }
);
console.log(db);
try {
  Sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:");
}
module.exports = db;
