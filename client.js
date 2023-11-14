import { io } from "socket.io-client";

const socket = io('http://localhost:3003');

socket.on('connect', () => {
  console.log(`You are connected as ${socket.id}`);
  console.log('SOCKET', socket);
});