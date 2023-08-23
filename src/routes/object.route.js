const { Router } = require('express');
const ObjectController = require('../controllers/object.controller');
const router = Router();

router.post('/createObject', ObjectController.createObject);
router.get('/objects', ObjectController.getAllObjects);

module.exports = router;