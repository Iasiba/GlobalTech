const { DataTypes } = require('sequelize')

const { db } = require('../utils/database')

const Users = db.define('userImages', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    url: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        }
    },
    userId: {
        allowNull: false,
        type: DataTypes.UUID
    }
})

module.exports = Users