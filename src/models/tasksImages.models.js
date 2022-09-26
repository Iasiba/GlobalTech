const { DataTypes } = require('sequelize')

const { db } = require('../utils/database')

const TaskImages = db.define('taskImages', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    Name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    taskId: {
        allowNull: false,
        type: DataTypes.UUID
    },
    url: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
            isUrl: true,
        }
    }
})

module.exports = TaskImages