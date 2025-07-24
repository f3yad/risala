class HTTPError extends Error {
  constructor(message, errorCode, statusCode, errors) {
    super(message);
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

module.exports = HTTPError;