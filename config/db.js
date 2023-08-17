const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "mysql-25b81b8f-evilzloy17-1e23.aivencloud.com",
  port: 24454,
  username: "avnadmin",
  password: "AVNS_aZhzeofnfLIMXWPFuK5",
  database: "defaultdb",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = sequelize;
