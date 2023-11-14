import { Server } from "socket.io";

const server = new Server();

server.on('connection', (socket) => {
  console.log(`User ${socket.id} has connected.`);
  console.log('SOCKET', socket);
});

server.listen(3003);