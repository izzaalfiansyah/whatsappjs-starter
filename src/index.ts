// import { createServer } from "http";
import express from "express";
// import path from "path";

// import { socketInit } from "./app/socket";

import "./app/bot";
export const app = express();
// const server = createServer(app);
const port = process.env.PORT || 3000;

// export const io = socketInit(server);

app.get("/", (req, res) => {
  res.send({
    hello: "World",
  });
});

app.listen(port, () => {
  console.log("Aplikasi berjalan di port " + port);
});

// server.listen(port, () => {
//   console.log("Socket running on port " + port);
// });

// export default app;
