const { response } = require("express");
const bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario');

const crearUsuario = async (req, res = response) =>{

    try {

        const { email, password } = req.body;

        //usar el modelo DB
        //verificar que el email no exista, ya que es unique
        const existeEmail =  await Usuario.findOne({ email });
        if( existeEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'El email ya existe'
            })
        }

        //instanciar usuario para DB
        const usuario = new Usuario( req.body );
        
        //encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt );

        //Guardar usuario en DB
        await usuario.save();
        
        res.json({
            usuario
        })

        //error interno
    } catch (error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrad@r'
        });

    }
}

//login
const login = async (req,res) =>{
    
    // Se ejecutará si no tenemos ningun error
    const { email, password } = req.body;
    res.json({
        ok: true,
        msg: 'login',
        email,
        password
    })
}

//renewToken
const renewToken = async (req, res) =>{
    res.json({
        ok: true,
        msg: 'renew'
    })
}


module.exports = {
    crearUsuario,
    login, 
    renewToken
}