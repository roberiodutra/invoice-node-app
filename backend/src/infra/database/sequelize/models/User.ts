import { DATE, INTEGER, Model, STRING, TINYINT } from 'sequelize';
import db from '.';

export default class User extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare phoneNumber?: string;
  declare mobile?: string;
  declare departament?: string;
  declare verificationCode?: string;
  declare emailChecked: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare cashforceAdm: number;
}

User.init(
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
    email: {
      type: STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    mobile: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    departament: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    verificationCode: {
      type: STRING,
      allowNull: true,
      defaultValue: null,
    },
    emailChecked: {
      type: TINYINT,
      allowNull: false,
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
    cashforceAdm: {
      type: TINYINT,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize: db,
    modelName: 'users',
    timestamps: false,
  }
);
