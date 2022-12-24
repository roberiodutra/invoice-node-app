import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ErrorCatalog, ErrorTypes } from '../../helpers/error-catalog';

const ErrorHandler: ErrorRequestHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const messageAsErrorType = err.message as keyof typeof ErrorTypes;
  const mappedError = ErrorCatalog[messageAsErrorType];

  if (mappedError) {
    const { code, message } = mappedError;
    return res.status(code).json({ message });
  }

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: 'Internal Error' });
};

export default ErrorHandler;
