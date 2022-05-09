import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { scrollBottomAnimated } from '../helpers/scrollToBottom';
import { useSocket } from '../hooks/useSocket'
import { types } from '../types/types';
import { ChatContext } from './chat/ChatContext';

export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const { socket, online, conectarSocket, desconectarSocket } = useSocket('http://localhost:8080');
    const { auth } = useContext( AuthContext );
    const { dispatch } = useContext( ChatContext);

    // si logged está en true, se conectará el socket
    useEffect(() => {
        if( auth.logged ){
            conectarSocket();

        }
      
    }, [auth, conectarSocket ]);

    // si logged está e false, se desconectará el socket
    useEffect(() => {
        if( !auth.logged ){
            desconectarSocket();

        }
      
    }, [auth, desconectarSocket ])
    
    //escuchar los cambios en los usuarios conectados
    useEffect(() => {
        
        socket?.on( 'lista-usuarios', (usuarios)=>{
            dispatch({
                type: types.usuariosCargados,
                payload: usuarios
            })
        })
      
    }, [socket, dispatch ]);

    useEffect(()=>{
        socket?.on('mensaje-personal', (mensaje) =>{
        
            // dispatch de una acción
            dispatch({
                type: types.nuevoMensaje,
                payload: mensaje
            });


            //mover el scroll al final
            scrollBottomAnimated('mensajes');
        })

    }, [socket, dispatch]);


    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}