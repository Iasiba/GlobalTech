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
        defaultValue: "12345678"
    },
    phone: {
        type: DataTypes.STRING,
    },
    birthdayDate: {
        type: DataTypes.DATEONLY
    },
    dni: {
        type: DataTypes.STRING
    },
    country: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "Mexico"
    },
    address: {
        type: DataTypes.STRING
    },
    profileImage: {
        type: DataTypes.STRING,
        /* validate: {
             isUrl: true
         },
         field: 'profile_image'*/
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
        defaultValue: "2000/01/01",
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: "2000/01/01",
        allowNull: false
    },
    roleId: {
        allowNull: false,
        type: DataTypes.UUID
    },
    watchMyAccount: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    watchActivities: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    watchDocumentation: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    watchHome: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    watchInventaries: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    watchMyHome: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    watchProjects: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    watchTasks: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    watchUsers: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createOrEditActivities: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createOrEditArea: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createOrEditAccount: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createOrEditGuide: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createOrEditInventary: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createOrEditMaterial: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createOrEditNote: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    createOrEditProject: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createOrEditBackup: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createOrEditTask: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createOrEditUser: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

module.exports = Users