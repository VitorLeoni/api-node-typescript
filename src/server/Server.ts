import express from "express";

const server = express();

// futuramente interface Teste extends {}

server.get("/", (req, res) => {
  return res.send("Funcionou");
});

export { server };
