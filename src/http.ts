/* eslint-disable @typescript-eslint/no-var-requires */
import express from "express";
import { createServer } from "http";
import path from "path";
import { Server, Socket } from "socket.io";

import { routes } from "./routes";
import "./database";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);

app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
});

const http = createServer(app); // criando protocolo http

const io = new Server(http); // criando protocolo WS

io.on("connection", (socket: Socket) => {
  console.log("Se conectou", socket.id);
});

app.use(express.json());
app.use(routes);

export { http, io };