const { Router } = require('express');
const OwnerController = require('../controllers/owner.controller');
const router = Router();

router.post('/registerOwner', OwnerController.registerOwner);
router.post('/loginOwner', OwnerController.loginOwner);

module.exports = router;