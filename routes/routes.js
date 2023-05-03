const { Router } = require('express');
const UserController = require('../controllers/UserController')
const PetController = require('../controllers/PetControllers')
const router = Router();

router.post('/register-user', UserController.createUser)
router.post('/register-pet', PetController.createPET)

module.exports = router;