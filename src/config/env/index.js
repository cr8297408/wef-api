const {config} = require('dotenv')
config()

const development = {
  PORT:process.env.PORT,
  DB_HOST: process.env.DB_HOST,
  JWT_SECRET: process.env.SECRET || 'secret',
  JWT_ALGORITHMS: process.env.JWT_ALGORITHMS,
  URL_SWAGGER: process.env.URL_SWAGGER,
}

module.exports = development;