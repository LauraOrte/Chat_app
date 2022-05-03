import React from 'react'
import { IncomingMessages } from './IncomingMessages'
import { OutgoingMessage } from './OutgoingMessage'
import { SendMessages } from './SendMessages'

export const Messages = () => {

    const msgs = [1,2,3,4,5,6,7,8,9]

  return (
    
    <div className="mesgs">

    {/* <!-- Historia inicio --> */}
    <div className="msg_history">

        {
            msgs.map( msg =>(
                ( msg % 2) 
                    ? <IncomingMessages key={ msg } />
                    : <OutgoingMessage key={ msg }/>
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
