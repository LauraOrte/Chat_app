const jwt  = require('jsonwebtoken');


//en el parámetro lo que se quiere encriptar
const generarJWT = ( uid ) =>{

    return new Promise(( resolve, reject) =>{

        const payload = { uid };

        jwt.sign( payload, process.env.JWT_KEY, {
            expiresIn:'24h'
        }, ( err, token ) => {
            if(err) {
                console.log(err);
                reject('No se pudo generar el JWT');
            } else {
                resolve( token );
            }

        })


    });
    

}

//comprobar el token que llega desde el cliente
const comprobarJWT = ( token= '') =>{
    try {
        const { uid } = jwt.verify( token, process.env.JWT_KEY );
        
        return [ true, uid ];

    } catch (error) {
        return [ false, null ];
        
    }

}


module.exports = {
    generarJWT,
    comprobarJWT
}