import { DATE, INTEGER, Model, STRING, TINYINT } from 'sequelize';
import db from '.';

export default class OrderPortion extends Model {
  declare id: number;
  declare nDup: string;
  declare dVenc: string;
  declare vDup: string;
  declare availableToMarket: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare orderId?: number;
}

OrderPortion.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nDup: {
      type: STRING,
      allowNull: false,
    },
    dVenc: {
      type: STRING,
      allowNull: false,
    },
    vDup: {
      type: STRING,
      allowNull: false,
    },
    availableToMarket: {
      type: TINYINT,
      allowNull: true,
      defaultValue: 1,
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
  },
  {
    sequelize: db,
    modelName: 'orderportions',
    timestamps: false,
  }
);
