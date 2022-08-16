const { Router } = require('express');
const UserRouter= require('./user');
const AuthRouter = require('./auth');
const router = Router();

router.use('/auth', AuthRouter)
router.use('/users', UserRouter)


module.exports = router;