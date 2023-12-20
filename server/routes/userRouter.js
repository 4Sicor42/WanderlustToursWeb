const Router = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware.js')
const router = new Router();

router.post('/', userController.registration);
router.post('/login', userController.login);
router.get('/auth',authMiddleware, userController.check);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
