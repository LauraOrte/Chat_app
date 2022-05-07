import { types } from "../../types/types";




//no debe tener interraciones del exterior el reducer, siempre regresa state
export const chatReducer = ( state, action ) =>{

    

    switch (action.type) {

        case types.usuariosCargados:
            return {
                ...state,
                usuarios:[ ...action.payload ]
            }
     
        default:
            return state;
    }
}