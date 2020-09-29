const Sequelize = require("sequelize");
// conection end config in BD
//configure o BD de acordo com o da sua maquina
const connection = new Sequelize("guiapress", "root", "sua senha", {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00",
});

module.exports = connection;
