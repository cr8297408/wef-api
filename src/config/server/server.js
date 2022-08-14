const express = require('express');
const cors = require('cors');
const Routes = require('../../routes');
const config = require('../env');

const app = express();

app.use(express.json());
app.use(cors())

const port = config.PORT;

/**
 * @constructs express.Application Routes
 */
app.use('/api/v1', Routes);

app.set('port', port)


module.exports = app;