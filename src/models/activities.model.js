const { DataTypes } = require('sequelize')

const { db } = require('../utils/database')

const Activities = db.define('activities', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING
    },
    isfinished: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    iscanceled: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createdAt: {
        type: DataTypes.DATEONLY
    },
    updatedAt: {
        type: DataTypes.DATE
    }
})

module.exports = Activities