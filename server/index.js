import cors from "cors";
import express from "express";

export class Server {
    constructor() {
        this.app = express();
    }

    init = async () => {
        this.app.use(cors());
        this.app.use(express.json());

        this.app.get("/", (req, res) => {
            res.send("Hello, World!");
        });

        return this.app;
    };
}
