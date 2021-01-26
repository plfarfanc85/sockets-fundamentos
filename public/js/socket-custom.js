var socket = io();

// Escuchar información
// on es para escuchar
socket.on("connect", function () {
  console.log("Conectado al servidor");
});

// Escuchar información
socket.on("disconnect", function () {
  console.log("Perdimos la conexión con el servidor");
});

// Emitir información
// emit son para emitir o enviar informacion
// el nombre del emit puede ser cualquiera, el nombre es lo que el servidor va a escuchar
socket.emit(
  "enviarMensaje",
  {
    usuario: "Fernando",
    mensaje: "Hola Mundo",
  },
  function (resp) {
    console.log("Respuesta server: ", resp);
  }
);

// Escuchar información
socket.on("enviarMensaje", function (mensaje) {
  console.log("Servidor:", mensaje);
});
