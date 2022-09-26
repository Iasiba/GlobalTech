const { DataTypes } = require('sequelize')

const { db } = require('../utils/database')

const Rooms = db.define('rooms', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    projectId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
})

module.exports = Rooms