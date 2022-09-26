const { DataTypes } = require('sequelize')

const { db } = require('../utils/database')

const Users = db.define('users', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    firstName: {
        allowNull: false,
        type: DataTypes.STRING
    },
    lastName: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    gender: {
        type: DataTypes.STRING
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING(30),
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    phone: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    birthdayDate: {
        type: DataTypes.DATEONLY
    },
    dni: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    profileImage: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        },
        field: 'profile_image'
    },
    status: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'active' //active, non-active, deleted, suspended
    },
    verified: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    roleId: {
        allowNull: false,
        type: DataTypes.UUID
    }
})

module.exports = Users