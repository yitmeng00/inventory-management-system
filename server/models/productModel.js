import { DataTypes } from "sequelize";
import { connection } from "../config/connection.js";

const Product = connection.define(
    "product",
    {
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        supplierId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        productCode: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        costPrice: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        salePrice: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        created: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        underscored: true,
        createdAt: false,
        updatedAt: false,
    }
);

export { Product };
