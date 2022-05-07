const Usuario = require('../models/usuario');

//actualizarlo cuando se conecte a la base de datos
const usuarioConectado = async ( uid ) =>{

    const usuario = await Usuario.findById(uid);
    usuario.online = true;
    await usuario.save();

    return usuario;

}

const usuarioDesconectado = async( uid ) =>{
    const usuario = await Usuario.findById(uid);
    usuario.online = false;
    await usuario.save();

    return usuario;

}

//conseguir todos los usuarios, primero los que estén online y luego offline
const getUsuarios = async() =>{

    const usuarios = await Usuario
    .find()
    .sort('-online');

    return usuarios;

}


module.exports={
    usuarioConectado,
    usuarioDesconectado,
    getUsuarios
    
}