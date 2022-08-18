const express = require('express');
const cors = require('cors');
const Routes = require('../../routes');
const config = require('../env');
const bodyParser = require('body-parser');
const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())
// parse application/json
app.use(bodyParser.json())

const port = config.PORT;

/**
 * @constructs express.Application Routes
 */
app.use('/api/v1', Routes);

app.set('port', port)


module.exports = app;