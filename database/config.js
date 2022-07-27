const mongoose = require('mongoose');
const dbConnection = async () => {

    try{
        await mongoose.connect( process.env.DB_CNN);
            console.log('conectado');

    }catch(e){
        console.log(e)
        throw new Error('Error para inicializar la base de datos')
    }
}

module.exports = {
    dbConnection
}