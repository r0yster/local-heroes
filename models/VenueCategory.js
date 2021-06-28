const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class VenueCategory extends Model {}

VenueCategory.init(
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
        venue_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'venue',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'venue_category'
    }
);

module.exports = VenueCategory;