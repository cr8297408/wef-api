class BaseResponse {
  status
  data
  context

  constructor (status, data, context) {
    this.status = status
    this.data = data
    this.context = context
  }

  getObject () {
    return this
  }

  getStatus () {
    return this.status
  }

  getData () {
    return {
      context: this.context,
      data: this.data
    }
  }
}

module.exports = BaseResponse;