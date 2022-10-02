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
        defaultValue:"12345678"
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
    taskId: {
        type: DataTypes.UUID
    }/*,
    materialId:{
        type: DataTypes.UUID
    }*/,
    projectId: {
        type: DataTypes.UUID
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
        defaultValue:"2000/01/01",
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue:"2000/01/01",
        allowNull: false
    },
    roleId: {
        allowNull: false,
        type: DataTypes.UUID
    }
})

module.exports = Users