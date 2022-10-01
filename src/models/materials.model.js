const { DataTypes } = require('sequelize')

const { db } = require('../utils/database')

const Material = db.define('materials', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    name: {
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
    inventoryId:{
        type:DataTypes.UUID,
        allowNull:false
    },
    projectId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    returned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

module.exports = Material