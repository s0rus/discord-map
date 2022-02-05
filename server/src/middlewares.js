const notFound = (req, res, next) => {
  const error = new Error(`You've lost your way in the jungle 🦍 - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    message: error,
    stack: process.env.NODE_ENV === 'production' ? 'YIKES!' : error.stack,
  });
};

module.exports = {
  notFound,
  errorHandler,
};
