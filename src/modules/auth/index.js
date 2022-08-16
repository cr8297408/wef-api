const AuthService = require('./service');
const usuarioSchema = require('../../schemas/user');


async function signIn(req, res){
  try {
    const {email, password} = req.body;
    const getAuth = await AuthService.signIn(email, password);
    res.status(getAuth.getStatus()).json(getAuth.getData())
  
  } catch (error) {
    res.json(error.message)
  }
}

async function signUp(req, res){
  try {
		let {
			user,
			name,
			email,
			phone,
			password
		} = await usuarioSchema.validateAsync(req.body);
    const getAuth = await AuthService.signUp({
			user,
			name,
			email,
			phone,
			password
		});
    res.status(getAuth.getStatus()).json(getAuth.getData())
  
  } catch (error) {
    res.json(error.message)
  }
}

async function changePassword(req, res){
  try {
    const {email, oldPassword, newPassword} = req.body;
    const getPassAuth = await AuthService.changePassword({
      email, 
      oldPassword, 
      newPassword
    }, req.headers['authorization'])

    res.status(getPassAuth.status).json(getPassAuth.message)
  } catch (error) {
    res.json(error.message)
  }
}

async function forgotPassword(req, res) {
  try {
    const {email} = req.body;
    const forgotPass = await AuthService.forgotPassword(email);
    res.status(forgotPass.status).json(forgotPass.message)
  } catch (error) {
    res.json(error.message)
  }
}

async function newPassword(req, res) {
  try {
    const { newPassword } = req.body;
    const newPass = await AuthService.newPassword(newPassword, req.headers['authorization'])
    res.status(newPass.status).json(newPass.message)
  } catch (error) {
    res.json(error.message)
  }
}

async function getUserAuth(req, res){
  try {
    const userLog = await AuthService.getUserLog(req.headers['authorization']) 

    res.status(userLog.status).json(userLog.message);
  } catch(error) {
    throw new Error(error.message)
  }
}

module.exports = {
  signIn,
	signUp,
  changePassword,
  forgotPassword,
  newPassword,
  getUserAuth
}