import { DATE, INTEGER, Model, STRING, TINYINT } from 'sequelize';
import db from '.';

export default class Buyer extends Model {
  declare id: number;
  declare name: string;
  declare tradingName?: string;
  declare cashforceTax?: string;
  declare responsibleName?: string;
  declare responsibleEmail?: string;
  declare responsiblePosition?: string;
  declare responsiblePhone?: string;
  declare responsibleMobile?: string;
  declare website?: string;
  declare postalCode?: string;
  declare address?: string;
  declare number?: string;
  declare complement?: string;
  declare neighborhood?: string;
  declare city?: string;
  declare state?: string;
  declare phoneNumber?: string;
  declare situation?: string;
  declare situationDate?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare cnpjId?: number;
  declare confirm?: number;
  declare email: string;
}

Buyer.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    tradingName: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    cashforceTax: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    responsibleName: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    responsibleEmail: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    responsiblePosition: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    responsiblePhone: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    responsibleMobile: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    website: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    postalCode: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    address: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    number: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    complement: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    neighborhood: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    city: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    state: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    phoneNumber: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    situation: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    situationDate: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    createdAt: {
      type: DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DATE,
      allowNull: false,
    },
    cnpjId: {
      type: INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    confirm: {
      type: TINYINT,
      allowNull: true,
      defaultValue: 1,
    },
    email: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize: db,
    modelName: 'buyers',
    timestamps: false,
  }
);
