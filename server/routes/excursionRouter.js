const Router = require('express');
const excursionController = require('../controllers/excursionController');
const checkRole = require('../middleware/checkRoleMiddleware')
const router = new Router();

// Получить все экскурсии
router.get('/', excursionController.getExcursions);

// Получить конкретную экскурсию
router.get('/:id', excursionController.getOneExcursion);

// Создать новую экскурсию
router.post('/',checkRole('ADMIN'), excursionController.createExcursion);

// Обновить экскурсию
router.put('/:id', excursionController.updateExcursion);

// Удалить экскурсию
router.delete('/:id', excursionController.deleteExcursion);

module.exports = router;
