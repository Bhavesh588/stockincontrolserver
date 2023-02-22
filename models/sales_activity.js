"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Sales_Activity extends Model {}
    Sales_Activity.init(
        {
            Sales_id: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                primaryKey: true,
            },
            year: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            Jan: {
                type: DataTypes.STRING(1000),
                allowNull: false,
            },
            Feb: {
                type: DataTypes.STRING(1000),
                allowNull: false,
            },
            Mar: {
                type: DataTypes.STRING(1000),
                allowNull: false,
            },
            Apr: {
                type: DataTypes.STRING(1000),
                allowNull: false,
            },
            May: {
                type: DataTypes.STRING(1000),
                allowNull: false,
            },
            Jun: {
                type: DataTypes.STRING(1000),
                allowNull: false,
            },
            Jul: {
                type: DataTypes.STRING(1000),
                allowNull: false,
            },
            Aug: {
                type: DataTypes.STRING(1000),
                allowNull: false,
            },
            Sep: {
                type: DataTypes.STRING(1000),
                allowNull: false,
            },
            Oct: {
                type: DataTypes.STRING(1000),
                allowNull: false,
            },
            Nov: {
                type: DataTypes.STRING(1000),
                allowNull: false,
            },
            Dec: {
                type: DataTypes.STRING(1000),
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "sales_activity",
            modelName: "Sales_Activity",
        }
    );
    return Sales_Activity;
};
