const express = require('express');
const cors = require('cors');
const connect = require('../database');

class Server {
	app;
	database = connect;
	constructor() {
		this.app = express();
		this.config();
		this.routes();
	}
	async config() {
    this.app.set("port", process.env.PORT || 5000);

    this.app.use(cors());
    this.app.use(express.json());
    this.app.set("trust proxy", true);
  }

  /**
   * get app method for tests 
   * @returns app
   */
  getApp() {
    return this.app;
  }

  routes() {
    // this.app.use("", IndexRoutes);
  } 

  start() {
    this.app.listen(this.app.get("port"), () => {
    this.database();    
    console.log("Server on port: ", this.app.get("port"));
  });
  }
}

module.exports = Server;