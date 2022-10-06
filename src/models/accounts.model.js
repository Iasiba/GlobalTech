const { DataTypes } = require('sequelize')

const { db } = require('../utils/database')

const Accounts = db.define('accounts', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    userId:{
        type: DataTypes.UUID,
        allowNull: false
    },
    owner: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        defaultValue: "",
        allowNull: false
    },
    projectId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    directionIp:{
        type: DataTypes.STRING,
        defaultValue:"0.0.0.0",
        allowNull: false
    },
    software: {
        type: DataTypes.STRING,
        defaultValue:"",
        allowNull: false
    }

})

module.exports = Accounts