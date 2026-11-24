const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Suco = db.define('suco',{
    codSuco: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    idUsuario:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            key: 'codUsuario',
            model: 'usuarios'
        }
    },
    sabor: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    volume: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
},{
    tableName: 'sucos',
    timestamps: false
})

module.exports = Suco