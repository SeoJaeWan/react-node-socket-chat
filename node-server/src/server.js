import express from "express";
import http from "http";
import SocketIO from "socket.io";

const app = express();
const webServer = http.createServer(app);
const socketServer = SocketIO(webServer, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

socketServer.on("connection", (socket) => {
  socket.on("message", (message) => {
    socketServer.emit("message", message);
  });
});

webServer.listen(4000, () => {
  console.log("Listening on port 4000");
});
