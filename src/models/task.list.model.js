const { DataTypes } = require('sequelize')

const { db } = require('../utils/database')

const TaskList = db.define('taskLists', {
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
})
module.exports = TaskList