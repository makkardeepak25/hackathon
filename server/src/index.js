const start = require("./server");
// const app = require("express")();
// const cors = require("cors")
// const io = require("socket.io")(start, {
//     cors: {
//         origin: "*",
//         methods:["GET", "POST"]
//     }
// })
// app.use(cors())

// io.on("connection", (socket) => {
//     socket.emit("me", socket.id);

//     socket.on("disconnect", () => {
//         socket.broadcast.emit("call ended")
//     })
//     socket.on("calluser", ({ userToCall, signalData, from, name }) => {
//         io.to(userToCall).emit("calluser", {signal:signalData,from,name})
//     })
//     socket.on("answercall", (data) => {
//         io.to(data.to).emit("callaccepted", data.signal)
//     })
// })
start();