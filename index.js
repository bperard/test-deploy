import { Server } from "socket.io";

const server = new Server();

const startServer = (PORT) => {
  server.listen(PORT);
  console.log(`Server running on Port ${PORT}`);
}

server.on('connection', (socket) => {
  console.log(`User ${socket.id} has connected.`);
  console.log('SOCKET', socket);
});

startServer(3003);