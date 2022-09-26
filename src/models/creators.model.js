const { DataTypes } = require('sequelize')

const { db } = require('../utils/database')

const Creators = db.define('creators', {
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
    }
})

module.exports = Creators