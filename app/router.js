const eo = require('express');
router = eo.Router();
module.exports = router;

mainController = require('./controllers/main.controller');

router.get('/', mainController.showHome);