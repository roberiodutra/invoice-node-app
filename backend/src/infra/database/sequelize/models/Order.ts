import { DATE, INTEGER, Model, STRING } from 'sequelize';
import db from '.';

export default class Order extends Model {
  declare id: number;
  declare orderNfId: string;
  declare orderNumber: string;
  declare orderPath?: string;
  declare orderFileName?: string;
  declare orderOriginalName?: string;
  declare emissionDate?: string;
  declare pdfFile?: string;
  declare emitedTo: string;
  declare nNf?: string;
  declare CTE?: string;
  declare value?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare cnpjId?: number;
  declare userId?: number;
  declare buyerId?: number;
  declare providerId?: number;
  declare orderStatusBuyer: string;
  declare orderStatusProvider: string;
  declare deliveryReceipt?: string;
  declare cargoPackingList?: string;
  declare deliveryCtrc?: string;
}

Order.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderNfId: {
      type: STRING,
      allowNull: false,
    },
    orderNumber: {
      type: STRING,
      allowNull: false,
    },
    orderPath: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    orderFileName: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    orderOriginalName: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    emissionDate: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    pdfFile: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    emitedTo: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    nNf: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    CTE: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    value: {
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
    userId: {
      type: INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    buyerId: {
      type: INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    providerId: {
      type: INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    orderStatusBuyer: {
      type: STRING,
      allowNull: false,
      defaultValue: '0',
    },
    orderStatusProvider: {
      type: STRING,
      allowNull: false,
      defaultValue: '0',
    },
    deliveryReceipt: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    cargoPackingList: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    deliveryCtrc: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize: db,
    modelName: 'orders',
    timestamps: false,
  }
);
