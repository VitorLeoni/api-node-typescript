"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const better_status_codes_1 = require("better-status-codes");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (req, res) => {
    return res.send("Funcionou");
});
router.post("/teste", (req, res) => {
    console.log(req);
    console.log(better_status_codes_1.Status.OK); // 200
    console.log(better_status_codes_1.Status["Switching Protocols"]); // 101
    return res.status(better_status_codes_1.Status.OK).json(req.body);
});
//# sourceMappingURL=index.js.map