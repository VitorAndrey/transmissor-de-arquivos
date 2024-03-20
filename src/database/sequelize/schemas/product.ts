import { DataTypes } from 'sequelize'
import { sequelize } from '../'

const Product = sequelize.define('product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  convenio: {
    type: DataTypes.STRING,
    allowNull: false
  },
  produto: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tp_op: {
    type: DataTypes.STRING,
    allowNull: false
  },
  compromisso: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dir_remessa: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dir_retorno: {
    type: DataTypes.STRING,
    allowNull: false
  },
  agenda: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

export { Product }
