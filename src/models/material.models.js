const { DataTypes } = require('sequelize')

const { db } = require('../utils/database')

const Material = db.define('materials', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    projectId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    returned:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
})

module.exports = Material