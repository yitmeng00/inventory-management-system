import cors from "cors";
import express from "express";

import { productRouter } from "./routes/productRoute.js";

export class Server {
    constructor() {
        this.app = express();
    }

    init = async () => {
        this.app.use(cors());
        this.app.use(express.json());

        this.app.use("/api/v1", productRouter);

        return this.app;
    };
}
