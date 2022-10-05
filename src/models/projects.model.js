const { DataTypes } = require('sequelize')

const { db } = require('../utils/database')

const Projects = db.define('projects', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    plane:{
        type: DataTypes.STRING,
        validate: {
            isUrl: true,
        }
    },
    address: {
        allowNull: false,
        type: DataTypes.STRING
    },
    coordinates: {
        allowNull: false,
        type: DataTypes.STRING
    },
    reference: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.STRING
    },
    country: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
})

module.exports = Projects