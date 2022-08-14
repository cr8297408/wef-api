const {config} = require('dotenv')
config()

const development = {
  PORT:process.env.PORT,
  DB_NAME: process.env.DB_NAME,
  DB_PASS: process.env.DB_PASS,
  DB_USER: process.env.DB_USER,
  DB_HOST: process.env.DB_HOST,
  DB_DIALECT: process.env.DB_DIALECT || 'mysql',
  JWT_SECRET: process.env.SECRET || 'secret',
  JWT_ALGORITHMS: process.env.JWT_ALGORITHMS,
  URL_SWAGGER: process.env.URL_SWAGGER,
  DB_PORT: process.env.DB_PORT
}

module.exports = development;