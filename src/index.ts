const { server } = require("./server/Server");

server.listen(process.env.PORT || 3333 , () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});

server.listen(3333, () => console.log("app rodando."));
