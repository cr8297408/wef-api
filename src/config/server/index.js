const server = require('./server')
const db = require('../database');

const port = server.get('port');

async function dbConnection(){
  try {
		await db()
		console.log('Database connect');
		server.listen(port, () => {
				console.log('APP LISTENING IN PORT: ',port);
		})
  } catch (error) {
		throw new Error(error.message)
  }
  
}

dbConnection()