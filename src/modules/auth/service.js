const User = require('../../models/user');
const config = require('../../config/env');
const UserService = require('../../modules/user/service');
const HttpResponse = require('../../core/response/http-response');
const AppError = require('../../core/errors/app-error');
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/**
 * @exports
 * @implements {Auth} model
 */
const AuthService = {
  
  async signIn(email, password){
    try {
      // const validate = AuthValidation.getAuth(body);
      // if (validate.error) {
      //   return new HttpResponse(400, validate.error);
      // }

			/**
			 * review
			 */
      const user = await User.findOne({
        email
      })

      console.log(password, email);

      if (!user) {
        return new AppError.UnauthorizedError('credenciales incorrectas')
      }
      const result = bcrypt.compareSync(password, user.password);
      if (!result) {
        return new AppError.UnauthorizedError('credenciales incorrectas')
      }
      const fecha = new Date();
      fecha.setDate(fecha.getDate() + 1)
      const dataToken = {
        id : user.id,
        active: user.active,
        expiredIn: fecha
      }

      const token = jsonwebtoken.sign({dataToken}, config.JWT_SECRET, {expiresIn: '24h'});
      return new HttpResponse.postSuccessful(token);

    } catch (error) {
      return new AppError.UnexpectedError(error);
    }
  },

	/**
	 * signUp method for new users
	 * @param {*} body 
	 * @returns 
	 */
	async signUp(body){
		try {
			const user = await UserService.store(body)
			return user;
		} catch (error) {
      return new HttpResponse.UnexpectedError(error);
		}

	}
  // async changePassword(body, bearerHeader){
  //   try {
  //     const user = await getUser(bearerHeader);
  //     const comparePass = bcrypt.compareSync(body.oldPassword,user.password);
  //     console.log(comparePass);
  //     if(body.email !== user.email || !comparePass){
  //       return new HttpResponse(400, 'credenciales incorrectas');
  //     }

  //     const changePassword = await User.update({
  //       password: bcrypt.hashSync(body.newPassword, 10),
  //     }, {
  //       where: {
  //         id: user.id
  //       }
  //     })

  //     return new HttpResponse(200, 'contraseña cambiada');
      
  //   } catch (error) {
  //     return new HttpResponse(400, error.message);
  //   }
  // },

  // async forgotPassword(email){
  //   try {

  //     let message = 'revisa tu email para cambiar la contraseña'

  //     const user = await User.findOne({
  //       where: {email}
  //     })

  //     if (!user) {
  //       return new HttpResponse(400, 'credenciales incorrectas');
  //     }

  //     const dataToken = {
  //       id : user.id,
  //       isAdmin : user.isAdmin,
  //       isActive : user.isActive,
  //       typeUser: user.typeUser,
  //     }

  //     const token = jsonwebtoken.sign({dataToken}, config.JWT_SECRET);
  //     const url = `${config.URL_FORGOT_PASS}/newPassword/${token}`

  //     // SEND EMAIL WITH LINK

  //     let contactLink = config.CONTACT_LINK;

  //     const emailFrom = config.MAIL_USER;
  //     const emailTo = user.email;
  //     const subject = 'recuperación contraseña'
  //     const textPrincipal = `Para recuperar tu contraseña ingresa al siguiente link`
  //     const html = TemplateSign(textPrincipal, user.username, url, contactLink)
  //     await sendMail('syscomp', emailFrom, emailTo, subject,html)

  //     return new HttpResponse(200, 'revisa tu correo');
      
  //   } catch (error) {
  //     return new HttpResponse(400, error.message);
  //   }
  // },

  // async newPassword(newPassword, bearerHeader){
  //   try {
  //     const user = await getUser(bearerHeader);
      
  //     let newpass = bcrypt.hashSync(newPassword, 10)
  //     const changePassword = await User.update({
  //       password: newpass,
  //     }, {
  //       where: {id: user.dataValues.id}
  //     })

  //     return new HttpResponse(200, 'contraseña cambiada');
      
  //   } catch (error) {
  //     return new HttpResponse(400, error.message);
  //   }
  // },
  
  // async getUserLog(bearerHeader){
  //   try {
  //     const user = await getUser(bearerHeader);
  //     if (!user) {
  //       return new HttpResponse(400, 'token invalido');
  //     }
  //     return new HttpResponse(200, user);
  //   } catch (error) {
  //     return new HttpResponse(400, error.message);
  //   }
  // }
}

module.exports = AuthService;