import { ProductService } from "../services/productService.js";

export class ProductController {
    static apiGetAllProducts = async (req, res) => {
        try {
            const result = await ProductService.getAllProducts();

            let response = {
                status: true,
                data: result,
            };

            res.status(200).json(response);
        } catch (error) {
            console.error("Unable to execute apiGetAllProducts", error);

            let response = {
                status: false,
                message: error.message || "An error occurred",
            };

            res.status(error.statusCode || 500).json(response);
        }
    };
}
