const { response } = require("express");
const bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario');
const { generarJWT } = require("../helpers/jwt");

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

        //Generar el JWT
        const token = await generarJWT( usuario.id );

        
        res.json({
            ok: true,
            usuario,
            token
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

    try {
        //verificar si el email existe, no es conveniente decir que da error
        const usuarioDB = await Usuario.findOne({ email });
        if ( !usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'Email o password no encontrado' 
            });
        }

        //Validar password, no es conveniente decir que da error
        const validPassword = bcrypt.compareSync( password, usuarioDB.password );
        if ( !validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Email o password no es correcto'
                
            });
        }

        // Generar el JWT
        const token = await generarJWT( usuarioDB.id);

        res.json({
            ok: true,
            usuario: usuarioDB,
            token
        })



    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrad@r'
        });

    }

}



//renewToken
const renewToken = async (req, res) =>{

    // el uid viene de la validación de JWT
    const uid = req.uid;

    //Generar nuevo JWT
    const token = await generarJWT( uid );

    //Obtener el usuario por UID
    const usuario = await Usuario.findById( uid );

    res.json({
        ok: true,
        usuario,
        token
    })
}


module.exports = {
    crearUsuario,
    login, 
    renewToken
}