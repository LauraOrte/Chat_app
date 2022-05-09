import { animateScroll } from "react-scroll";

export const scrollBottom = ( id ) =>{

    //ir a un chat y que vaya scroll al final
    animateScroll.scrollToBottom({
        containerId: id,
        duration: 0
    });


}

export const scrollBottomAnimated = ( id ) =>{

    //animación
    animateScroll.scrollToBottom({
        containerId: id,
        duration: 400
    });


}