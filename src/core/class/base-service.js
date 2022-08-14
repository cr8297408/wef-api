const HttpResponse = require('../response/http-response');
const AppError = require('../errors/app-error');

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
      return new AppError.UnexpectedError(error)
    }
  }

  /**
   * post a register in db
   * @param {*} body 
   * @returns 
   */
  async store(body){
    try {
      const response = new this.model(body);
      await response.save();
      return new HttpResponse.postSuccessful(response);
    } catch (error) {
      return new AppError.UnexpectedError(error)
    }
  }

  /**
   * get a register individuali by id
   * @param {*} id 
   * @returns 
   */
  async show(id){
    try {
      const response = await this.model.findById(id);
      return new HttpResponse.getSuccessful(response)
    } catch (error) {
      return new AppError.UnexpectedError(error)
    }
  }

  /**
   * update a register by id in the db 
   * @param {*} body 
   * @param {*} id 
   * @returns 
   */
  async update(body, id){
    try {
      const options = { new: true };
      const result = await this.model.findByIdAndUpdate(id, body, options);
      return new HttpResponse.putSuccessful(result)
    } catch (error) {
      return new AppError.UnexpectedError(error)
    }
  }

  async destroy(){
    try {
      await Producto.findByIdAndDelete(idProducto);
      return new HttpResponse.deleteSuccessful('deleted Ok!!!')
    } catch (error) {
      return new AppError.UnexpectedError(error)
    }
  }

}

module.exports = BaseService;