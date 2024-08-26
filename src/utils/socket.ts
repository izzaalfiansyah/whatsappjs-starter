import { Server } from "socket.io";

export const socketInit = (server: any) => {
  const io = new Server(server);

  io.on("connection", (socket) => {
    console.log("a user connected to socket");

    io.emit("qr", "");

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });

  return io;
};
