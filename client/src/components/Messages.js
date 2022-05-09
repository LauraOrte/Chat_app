import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'
import { ChatContext } from '../context/chat/ChatContext'
import { IncomingMessages } from './IncomingMessages'
import { OutgoingMessage } from './OutgoingMessage'
import { SendMessages } from './SendMessages'

export const Messages = () => {

    const { chatState } = useContext( ChatContext);
    const { auth } = useContext( AuthContext );

  return (
    
    <div className="mesgs">

    {/* <!-- Historia inicio --> */}
    <div
      id="mensajes"
      className="msg_history">

        {
            chatState.mensajes.map( msg =>(
                ( msg.para === auth.uid ) 
                    ? <IncomingMessages key={ msg._id } msg={ msg} />
                    : <OutgoingMessage key={ msg._id } msg={ msg}/>
            ))
        }


        {/* <IncomingMessages />

        <OutgoingMessage /> */}

        

    </div>
    {/* <!-- Historia Fin --> */}

    <SendMessages />

</div>


  )
}
