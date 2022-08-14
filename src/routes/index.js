const { Router } = require('express');
const UserRouter= require('./user');
const router = Router();

router.use('/users', UserRouter)


module.exports = router;