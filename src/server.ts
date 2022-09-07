import dotenv from "dotenv";
import express from "express";
import mustache from "mustache-express";
import path from "path";

import routes from "./routes";

dotenv.config();

const server = express();

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(express.static(path.join(__dirname, "../public")));

server.use(routes);

server.use((req, res) => {
  res.send("Página não encontrada!");
})

server.listen(process.env.PORT, () => console.log("Server running in", process.env.PORT));