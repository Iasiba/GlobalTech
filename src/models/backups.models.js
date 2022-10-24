const { DataTypes } = require('sequelize')
const { db } = require('../utils/database')

const Backup = db.define('backup', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    software: {
        allowNull: false,
        type: DataTypes.STRING
    },
    version: {
        allowNull: false,
        type: DataTypes.STRING
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    backup: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
            isUrl: true,
        }
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    projectId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    date:{
        type:DataTypes.DATEONLY,
        allowNull:false       
    }
})

module.exports = Backup