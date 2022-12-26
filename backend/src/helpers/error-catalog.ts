import { StatusCodes } from 'http-status-codes';

export enum ErrorTypes {
  InvalidUpdatedDate = 'InvalidUpdatedDate',
  InvalidBuyerName = 'InvalidBuyerName',
  InvalidBuyerEmail = 'InvalidBuyerEmail',
  InvalidCnpjFormat = 'InvalidCnpjFormat',
  InvalidCnpjCompanyType = 'InvalidCnpjCompanyType',
  UserNotFound = 'UserNotFound',
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
    code: StatusCodes.BAD_REQUEST,
  },

  InvalidBuyerName: {
    message: 'Buyer name must be at least 5 characters long',
    code: StatusCodes.BAD_REQUEST,
  },

  InvalidBuyerEmail: {
    message: 'Buyer email must be valid "example@email.com"',
    code: StatusCodes.BAD_REQUEST,
  },

  InvalidCnpjFormat: {
    message: 'Cnpj must have a valid format',
    code: StatusCodes.BAD_REQUEST,
  },

  InvalidCnpjCompanyType: {
    message: 'CompanyType must have a value between 1 and 10',
    code: StatusCodes.BAD_REQUEST,
  },

  UserNotFound: {
    message: 'User Not Found',
    code: StatusCodes.NOT_FOUND,
  },
};
