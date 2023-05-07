const { DataTypes } = require('sequelize')
const { db } = require('../utils/database')

const Programming = db.define('programming', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    datasheet: {
        //allowNull: false,
        defaultValue:'https://www.youtube.com/',
        type: DataTypes.STRING,
        //validate: { isUrl: true }
    },
    guide: {
        //allowNull: false,
        defaultValue:'https://www.youtube.com/',
        type: DataTypes.STRING,
        //validate: { isUrl: true }
    },
    tutorial: {
        //allowNull: false,
        type: DataTypes.STRING,
        defaultValue:'https://www.youtube.com/',
        //validate: { isUrl: true }
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false
    }
})

module.exports = Programming