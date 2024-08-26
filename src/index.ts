import { createServer } from "http";
import express from "express";
import path from "path";

import "./app/bot";
import { socketInit } from "./utils/socket";
import bot from "./app/bot";

export const app = express();
const server = createServer(app);
const port = process.env.PORT || 3000;

export const io = socketInit(server);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/send", (req, res) => {
  const phone = req.query.phone;
  const text = req.query.text;

  bot.sendMessage(phone + "@c.us", text!.toString());

  res.json({
    success: true,
    message: "pesan berhasil terkirim",
    text,
  });
});

server.listen(port, () => {
  console.log("Socket running on port " + port);
});
