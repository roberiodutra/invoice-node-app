"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _httpstatuscodes = require('http-status-codes');
var _errorcatalog = require('../../helpers/error-catalog');

const ErrorHandler = (
  err,
  _req,
  res,
  _next
) => {
  const messageAsErrorType = err.message ;
  const mappedError = _errorcatalog.ErrorCatalog[messageAsErrorType];

  if (mappedError) {
    const { code, message } = mappedError;
    return res.status(code).json({ message });
  }

  return res
    .status(_httpstatuscodes.StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: 'Internal Error' });
};

exports. default = ErrorHandler;
