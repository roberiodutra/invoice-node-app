import { DATE, INTEGER, Model, STRING, TINYINT } from 'sequelize';
import db from '.';

export default class Offer extends Model {
  declare id: number;
  declare tax: string;
  declare tariff: string;
  declare adValorem: string;
  declare float: string;
  declare iof: string;
  declare expiresIn: Date;
  declare paymentStatusSponsor: number;
  declare paymentStatusProvider: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare orderId?: number;
  declare sponsorId?: number;
}

Offer.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tax: {
      type: STRING,
      allowNull: false,
    },
    tariff: {
      type: STRING,
      allowNull: false,
    },
    adValorem: {
      type: STRING,
      allowNull: false,
    },
    float: {
      type: STRING,
      allowNull: false,
    },
    iof: {
      type: STRING,
      allowNull: false,
    },
    expiresIn: {
      type: STRING,
      allowNull: false,
    },
    paymentStatusSponsor: {
      type: TINYINT,
      defaultValue: 0,
    },
    paymentStatusProvider: {
      type: TINYINT,
      defaultValue: 0,
    },
    createdAt: {
      type: DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DATE,
      allowNull: false,
    },
    orderId: {
      type: INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    sponsorId: {
      type: INTEGER,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize: db,
    modelName: 'offers',
    timestamps: false,
  }
);
