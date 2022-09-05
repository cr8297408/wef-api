const { Router } = require('express');
const UserRouter= require('./user');
const AuthRouter = require('./auth');
const RegisterRouter = require('./register');

const router = Router();

router.use('/auth', AuthRouter)
router.use('/users', UserRouter)
router.use('/registers', RegisterRouter)



module.exports = router;