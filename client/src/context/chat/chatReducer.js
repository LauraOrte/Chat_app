import { types } from "../../types/types";

// const initialState = {
//     uid: '',
//     chatActivo: null, // UID del usuario al que yo quiero enviar mensajes
//     usuarios: [], // Todos los usuarios de la base datos
//     mensajes: [], // El chat seleccionado
// }




//no debe tener interraciones del exterior el reducer, siempre regresa state
export const chatReducer = ( state, action ) =>{

    

    switch (action.type) {

        case types.cerrarSesion:
            return{
                uid: '',
                chatActivo: null,
                usuarios: [],
                mensajes: []
            }

        case types.usuariosCargados:
            return {
                ...state,
                usuarios:[ ...action.payload ]
            }

        case types.activarChat:
            if(state.chatActivo === action.payload) return state;

            return{
                ...state,
                chatActivo: action.payload,
                mensajes: []

            }
           
        case types.nuevoMensaje:
            if( state.chatActivo === action.payload.de ||
                state.chatActivo === action.payload.para
                ){
                return {
                    ...state,
                    mensajes: [...state.mensajes, action.payload ]
                }

            } else {
                return state;

            }

        case types.cargarMensajes:
            return{
                ...state,
                mensajes: [...action.payload]
            }
     
        default:
            return state;
    }
}