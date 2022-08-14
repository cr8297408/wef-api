
class BaseError extends Error {
  name
  message
  context
  status
  constructor ({ name, message, context, status }) {
    super()
    this.name = name
    this.message = message
    this.context = context
    this.status = status
  }

  throw () {
    throw this
  }

  getStatus () {
    return this.status
  }

  getData () {
    return {
      name: this.name,
      message: this.message,
      context: this.context
    }
  }
}

module.exports = BaseError;