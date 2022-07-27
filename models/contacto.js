const {Schema,model} = require('mongoose');

const userSchema = Schema({

    nombre:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    telefono:{
        type: String,
        required:true
    },
    descripcion:{
        type: String,
        required:true
    }

});

module.exports = model('Contacto', userSchema);