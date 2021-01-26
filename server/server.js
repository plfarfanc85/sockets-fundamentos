const express = require("express");
const socketIO = require("socket.io");
const http = require("http"); // socket trabaja con servidor por defecto de node, y no con express.

const path = require("path");

const app = express(); // express detras de las cortinas llama funciones del http
let server = http.createServer(app); // son tas parecidas que podemos enviar app como argumento en el createServer

const publicPath = path.resolve(__dirname, "../public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO - va a mantener una conexión directa con el servidor
// esta es la comunicación del backend
module.exports.io = socketIO(server);
require("./sockets/socket");

server.listen(port, (err) => {
  if (err) throw new Error(err);

  console.log(`Servidor corriendo en puerto ${port}`);
});
