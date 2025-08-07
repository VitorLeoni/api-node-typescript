"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
require("dotenv/config"); // Load environment variables from .env file
const index_js_1 = require("./routes/index.js");
const server = (0, express_1.default)();
exports.server = server;
server.use(express_1.default.json()); // JSON bodies
server.use(index_js_1.router);
//# sourceMappingURL=Server.js.map