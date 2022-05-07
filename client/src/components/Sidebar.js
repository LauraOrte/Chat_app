import React, { useContext } from 'react';

import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';

import { SidebarChatItem } from './SidebarChatItem';

export const Sidebar = () => {

    const { chatState } = useContext( ChatContext );


    return (
        <div className="inbox_chat">

            {
                chatState.usuarios.map( (usuario) => (
                    <SidebarChatItem key={ usuario.uid }
                        
                    />
                ))
            }


            {/* <!-- Espacio extra para scroll --> */}
            <div className="extra_space"></div>


        </div>

    )
}
