const HTTPError = require("./HTTPError");

class UnprocessableEntityError extends HTTPError {
  constructor(message, errorCode, errors) {
    super(message, errorCode, 422, errors);
  }
}

module.exports = UnprocessableEntityError;