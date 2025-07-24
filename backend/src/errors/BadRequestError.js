const HTTPError = require("./HTTPError");

class BadRequestError extends HTTPError {
  constructor(message, errorCode) {
    super(message, errorCode, 400, null);
  }
}

module.exports = BadRequestError;