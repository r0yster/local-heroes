const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class UserInterests extends Model {}

UserInterests.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        // user_hometown: {
        //     type: DataTypes.STRING,
        //     references: {
        //         model: 'user',
        //         key: 'city'
        //     }
        // }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        moduleName: 'user_interests'
    }
);

module.exports = UserInterests;