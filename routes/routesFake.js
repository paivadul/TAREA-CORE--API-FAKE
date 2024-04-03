const {Router} = require('express'); //express: se está utilizando una cosa llamada router
const { getNewUser, getNewCompany, getNewUserCompany } = require('../controllers/controllersFake');
const router = Router()

//RUTAS: se guardan todas las rutas a utilizar.
router.use('/users/new', getNewUser) //PARA CONECTAR CON POSTMAN

router.use('/companies/new', getNewCompany)

router.use('/user/company', getNewUserCompany)

//SINTAXIS PARA EXPORTAR ROUTER
module.exports = router;