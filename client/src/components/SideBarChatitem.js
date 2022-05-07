import React from 'react'

export const SidebarChatItem = ({ usuario }) => {

  return (
    
     <div className="chat_list">
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
