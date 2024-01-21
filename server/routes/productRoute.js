import express from "express";
import { ProductController } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/products", ProductController.apiGetAllProducts);

export { productRouter };
