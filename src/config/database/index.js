const mongoose = require('mongoose');

const config = require('../env');

const DB_HOST = config.DB_HOST;


const connect = async () => {
    const db = await mongoose.connect(DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true });
};

module.exports = connect;