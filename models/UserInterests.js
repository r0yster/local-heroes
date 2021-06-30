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
<<<<<<< HEAD
        selected_city: {
            type: DataTypes.STRING
        }
=======
  
>>>>>>> 98116f7dee995279aa0699dd3c8625305474b912
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