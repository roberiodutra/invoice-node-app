import { DATE, INTEGER, Model, STRING } from 'sequelize';
import db from '.';

export default class Cnpj extends Model {
  declare id: number;
  declare cnpj: string;
  declare companyType: string;
  declare createdAt: Date;
  declare updatedAt: Date;
}

Cnpj.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cnpj: {
      type: STRING,
      allowNull: false,
    },
    companyType: {
      type: STRING,
      allowNull: false,
    },
    createdAt: {
      type: DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DATE,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'cnpjs',
    timestamps: false,
  }
);
