module.exports = {
    HOST: process.env.MYSQL_HOSTNAME,
    USER: process.env.MYSQL_USER,
    PASSWORD: process.env.MYSQL_ROOT_PASSWORD,
    DB: process.env.MYSQL_DATABASE,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };