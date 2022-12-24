import { StatusCodes } from 'http-status-codes';

export enum ErrorTypes {
  InvalidUpdatedDate = 'InvalidUpdatedDate',
}

type ErrorResponseObject = {
  message: string;
  code: number;
};

type catalog = {
  [key in ErrorTypes]: ErrorResponseObject;
};

export const ErrorCatalog: catalog = {
  InvalidUpdatedDate: {
    message: 'Invalid updated date',
    code: StatusCodes.UNAUTHORIZED,
  },
};
