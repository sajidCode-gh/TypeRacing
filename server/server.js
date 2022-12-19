const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const publicPath = path.join(__dirname, "/../client");

const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

io.on("connection", (socket) => {
    console.log("A user just connected.");
    socket.emit("init", { data: "hello from server" });
    socket.on("disconnect", () => {
        console.log("A user just disconnected");
    });
});
