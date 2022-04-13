const express = require("express");
const socketio = require("socket.io");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "/public")));

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () =>
  console.log(`Sever listening on port ${PORT}`)
);

const io = socketio(server);

io.on("connection", (socket) => {
  socket.emit("welcome", {
    res: { name: "John Slobo", id: "456864-39hd823292", class: "Bachelor" },
  });
  socket.on("i am client", (data) => console.log(data));
});
