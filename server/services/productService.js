import { Product } from "../models/index.js";

export class ProductService {
    static getAllProducts = async () => {
        try {
            const products = await Product.findAll({
                attributes: [
                    "productI",
                    "productName",
                    "categoryId",
                    "supplierId",
                    "productCode",
                    "description",
                    "costPrice",
                    "salePrice",
                    "quantity",
                    "created",
                ],
            });

            if (products.length === 0) {
                const error = new Error(
                    "There is no product exists in the table."
                );
                error.statusCode = 404;
                throw error;
            }

            return products;
        } catch (error) {
            if (error.statusCode === 404) {
                console.error(error.message, error);
                throw error;
            } else {
                console.error("Unable to execute sql query", error);
                throw new Error(error);
            }
        }
    };
}
