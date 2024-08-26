import { createServer } from "http";
import express from "express";
import path from "path";

import "./app/bot";
import { socketInit } from "./utils/socket";

export const app = express();
const server = createServer(app);
const port = process.env.PORT || 3000;

export const io = socketInit(server);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

server.listen(port, () => {
  console.log("Socket running on port " + port);
});
