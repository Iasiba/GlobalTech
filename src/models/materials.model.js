const { DataTypes } = require('sequelize')

const { db } = require('../utils/database')

const Material = db.define('materials', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    inventoryId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    projectId: {
        type: DataTypes.UUID
    },
    roomId: {
        type: DataTypes.UUID
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    materialListId: {
        type: DataTypes.UUID
    },
    damaged: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    installed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    delivered: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    returned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    assigned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    onHold: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

module.exports = Material