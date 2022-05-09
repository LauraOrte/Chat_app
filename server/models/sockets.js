const { usuarioConectado, usuarioDesconectado, getUsuarios } = require("../controllers/sockets");
const { comprobarJWT } = require("../helpers/jwt");

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', async ( socket ) => {

            //lee el lo que está en el query cuando se conecta, lo mandamos desde client, y se lo mandamos a la funcion de comprobarJWT
            
            const [ valido, uid ] = comprobarJWT(socket.handshake.query['x-token']);

            //si al comprobar, no es vàlido
            if ( !valido ){
                console.log('socket no identificado');
                return socket.disconnect();

            }
            
            // cuando se conecte, llamar a esa función y muestra el uid
            await usuarioConectado( uid );


            //unir al usuario a una sala de socket.io, a una sala de chat
            socket.join( uid );



            
            // validar el JWT
            // si el token no es válido, desconectar

            //Saber qie usuario está activo mediante UID

            //Emitir todos los usuarios conectados
            this.io.emit( 'lista-usuarios', await getUsuarios() );

            //Socket.join, uid

            //Escuchar cuando el cliente manda un mensaje
            socket.on('mensaje-personal', (payload) =>{
                console.log(payload);
            });
            
            

            //Disconnect
            //Marcar en la BD que el usuario se desconectó

            //Emitir todos los usuarios conectados


            //muestra el uid del que se ha desconectado
            socket.on('disconnect', async() =>{
                await usuarioDesconectado( uid );
                //mandar de nuevo, al desconectarse, quien se queda
                this.io.emit( 'lista-usuarios', await getUsuarios() );


            })

            
        
        });
    }


}


module.exports = Sockets;