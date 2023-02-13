const { DataTypes } = require('sequelize')

const { db } = require('../utils/database')

const MaterialList = db.define('materialLists', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    materialId: {
        type: DataTypes.UUID,
        allowNull: false
    },
})
module.exports = MaterialList