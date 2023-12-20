const Router = require('express');
const historyController = require('../controllers/historyController');

const router = new Router();

// Get history for a specific user
router.get('/:id', historyController.getHistory);

// Create new user history
router.post('/:id', historyController.createHistory);

// Update user history
router.put('/:id/:excursionId', historyController.updateHistory);

// Delete user history
router.delete('/:id/:excursionId', historyController.deleteHistory);

module.exports = router;
