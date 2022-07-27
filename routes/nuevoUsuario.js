const {Router} = require('express');
const router = Router();
const {check} = require('express-validator');

const { nuevoUsuario, pedirUsuario } = require('../controllers/nuevoUsuario')
const { validateFields } = require('../middlewares/validateFields')

router.post(
    '/nuevo',
    [
        check('nombre','El nombre es obligatorio').not().isEmpty() ,
        check('email','El correo no es valido').isEmail(),
        check('telefono','Telefono no tiene la longitud adecuada (11)').isLength({max:11,min:11}),
        check('descripcion',' La descripcion debe tener minimo 20 caracteres').isLength({min:20}),
        validateFields
    ],
    nuevoUsuario );

router.get('/contactos', pedirUsuario)

module.exports = router;