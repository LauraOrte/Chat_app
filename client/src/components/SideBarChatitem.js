import React, { useContext } from 'react'
import { ChatContext } from '../context/chat/ChatContext'
import { fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';

export const SidebarChatItem = ({ usuario }) => {

  const {chatState, dispatch} = useContext(ChatContext);
  const {chatActivo} = chatState;

  const onClick = async() =>{


    dispatch({
      type: types.activarChat,
      payload: usuario.uid

    })

    // Cargar los mensajes del chat, ponemos el usuario que quiero cargar sus mensajes
    const resp = await fetchConToken(`mensajes/${ usuario.uid }`);

    dispatch({
      type: types.cargarMensajes,
      payload: resp.mensajes
    });

    // TODO mover el scroll
  }

  return (
    
     <div
      className={`chat_list ${(usuario.uid === chatActivo) && 'active_chat'}`}
      onClick={onClick}
      
      >
     <div className="chat_people">
         <div className="chat_img"> 
             <img src="https://st2.depositphotos.com/22919514/47561/v/380/depositphotos_475610056-stock-illustration-avatar-surfer-outline-colored-icon.jpg?forcejpeg=true" alt="sunil" />
         </div>
         <div className="chat_ib">
              <h5>{ usuario.nombre }</h5> 
             {
               (usuario.online)
                 ? <span className="text-success">Online</span>
                 :  <span className="text-danger">Offline</span>
             }
             
            
         </div>
     </div>
 </div>
 
  )
}
