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
    taskId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING
    },
    observation: {
        type: DataTypes.STRING
    },
    signature: {
        type: DataTypes.STRING
    },
    receiver: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATEONLY
    },
    updatedAt: {
        type: DataTypes.DATE
    }
})

module.exports = Activities