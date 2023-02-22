"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Register extends Model {
        static associate({ Deposito }) {
            this.belongsTo(Deposito, {
                foreignKey: "Deposito_id",
                as: "deposito",
            });
        }
    }
    Register.init(
        {
            id: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true,
            },
            displayName: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            emailVerified: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            providerId: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            subscribePlan: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            country: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            state: {
                type: DataTypes.TEXT("long"),
                allowNull: true,
            },

            //-----------CATEGORY ID ASSOCIATIONS---------------------------
            // Category_id: {
            //     type: DataTypes.DATE,
            //     allowNull: false,
            // },

            //----------------------------------------------------------------
        },
        {
            sequelize,
            tableName: "register",
            modelName: "Register",
        }
    );
    return Register;
};
