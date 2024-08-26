import { io } from "..";

export default function onReady() {
  io.emit("ready", "1");
  console.log("Client connected!");
}
