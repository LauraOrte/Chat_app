class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            // validar el JWT
            // si el token no es válido, desconectar

            //Saber qie usuario está activo mediante UID

            //Emitir todos los usuarios conectados

            //Socket.join, uid

            //Escuchar cuando el cliente manda un mensaje
            //mensaje-personal

            //Disconnect
            //Marcar en la BD que el usuario se desconectó

            //Emitir todos los usuarios conectados


            
        
        });
    }


}


module.exports = Sockets;