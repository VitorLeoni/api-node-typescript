"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { server } = require("./server/Server");
server.listen(process.env.PORT || 3333, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map