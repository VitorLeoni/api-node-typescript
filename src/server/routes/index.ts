import { Router } from "express";
import { Status } from "better-status-codes";

const router = Router();


router.get("/", (req, res) => {
  return res.send("Funcionou");
});

router.post("/teste", (req, res) => {
  console.log(req);

console.log(Status.OK); // 200
console.log(Status["Switching Protocols"]); // 101

  return res.status(Status.OK).json(req.body);
});

export { router };// futuramente interface Teste extends 