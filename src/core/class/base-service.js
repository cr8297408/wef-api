const HttpResponse = require('../response/http-response');

class BaseService {
	constructor(model){
		this.model = model;
	}

	/**
   * basic method for get all records of a table
   * @param Model
   * @param role
   * @param idUsuario
   * @returns array of records
  */
	 async index () {
    try {
      let records = []
			records = await this.model.find()
			return new HttpResponse.getSuccessful(records)
      
    } catch (e) {
      return new AppError.UnexpectedError(e)
    }
  }
}

module.exports = BaseService;