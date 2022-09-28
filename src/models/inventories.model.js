const { DataTypes } = require('sequelize')

const { db } = require('../utils/database')

const Inventory = db.define('inventory', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

module.exports = Inventory