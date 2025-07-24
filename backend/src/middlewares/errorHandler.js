function errorHandler (error, req, res, next) {
  console.log(error);
  
  res.status(error.statusCode).json({
    error: true,
    message: error.message,
    errorCode: error.errorCode,
    errors: error.errors,
  });
}

module.exports = errorHandler;