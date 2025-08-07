import express from "express";
import "dotenv/config"; // Load environment variables from .env file

import { router } from "./routes/index.js";
const server = express();


server.use(express.json()); // JSON bodies

server.use(router);  
 



export { server };
