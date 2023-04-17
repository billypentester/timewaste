import express from "express";
const app = express();
import http from "http";
import { Server } from 'socket.io';
import cors from 'cors';

const PORT = process.env.PORT || 3001;

app.use(cors())
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

const roomCode = "0000";

const users = [];

io.on("connection",(socket)=>{

    console.log("New User Connected: ", socket.id)

    if(users.length==4)
    {
        console.log("Room is full");
        socket.emit('startGame');
    }
    
    socket.on('joinRoom', (name) => {
        
        if(users.length>=4)
        {
            socket.emit('roomFull');
        }
        else
        {
            socket.join(roomCode);
            console.log(`User: ${name} joined room with id ${socket.id}`);
            socket.emit('joinedRoom', {id:socket.id, name: name});
            users.push({id:socket.id, name: name});
        }
    });

    // get all users in room

    socket.on('getUsers', (callback) => {
        callback(users);
    })

    socket.on('leaveRoom', (roomCode) => {
        socket.leave(roomCode);
        console.log(`Socket ${socket.id} left room ${roomCode}`);
    })

    socket.on('disconnect', () => {
        console.log(`Socket ${socket.id} disconnected`);
    });

})

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
