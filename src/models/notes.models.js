const { DataTypes } = require('sequelize')
const { db } = require('../utils/database')

const Note = db.define('note', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    tittle: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue:""
    },
    note: {
        allowNull: false,
        type: DataTypes.STRING
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false
    }
})

module.exports = Note