const { DataTypes } = require('sequelize')

const { db } = require('../utils/database')

const Tasks = db.define('tasks', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    userId: {
        allowNull: false,
        type: DataTypes.UUID
    },
    taskListId: {
        type: DataTypes.UUID
    },
    roomId: {
        allowNull: false,
        type: DataTypes.UUID
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING
    },
    observation: {
        type: DataTypes.STRING,
        defaultValue: ""
    },
    material: {
        type: DataTypes.STRING,
        defaultValue: "ninguno"
    }
/*    ,
    creatorId: {
        allowNull: false,
        type: DataTypes.UUID
    }*/,
    executionDate: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        defaultValue: "2000/01/01"//año/mes/dia
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
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
})

module.exports = Tasks