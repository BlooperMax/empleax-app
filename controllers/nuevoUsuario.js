const {response} = require('express');
const Contacto = require('../models/contacto');

const nuevoUsuario = async (req,res = response ) => {

    const {nombre, email, telefono} = req.body;

    try {
        
        let contacto = await Contacto.findOne({ email })
        
        if (contacto) {
            return res.status(400).json({
                ok:false,
                msg:'Este correo ya esta en uso',
            })
        }

        contacto = new Contacto( req.body );

        // Save user

        await contacto.save();

        res.json({
            ok:true,
            id:contacto.id,
            nombre,
            email,
            telefono
        })

    } catch (e) {
        console.log(e)
        res.status(500).json({
            ok:false,
            msg:'algo salio mal :C',
        })
    }
};

const pedirUsuario = async (req,res = response ) => {

    const contacts = await Contacto.find({});

    res.status(200).json({
        ok:true,
        contacts
    })
};

module.exports = {
    nuevoUsuario,
    pedirUsuario
}