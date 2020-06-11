const express = require('express');
const router = express.Router();

//Gym controller

const gymController = require('../controllers/gymController');

router.get('/', gymController.list);
router.post('/add', gymController.save);
router.get('/delete/:id', gymController.delete);

router.get('/update/:id', gymController.edit);
router.post('/update/:id', gymController.update);


module.exports = router;