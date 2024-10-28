const express = require('express');
const { addDoctor, updateDoctor, deleteDoctor } = require('../controllers/doctorController');
const { verifyToken } = require('../middleware/authMiddleware');
const { isAdmin } = require('../middleware/roleMiddleware');
const router = express.Router();

router.post('/', verifyToken, isAdmin, addDoctor);
router.put('/:id', verifyToken, isAdmin, updateDoctor);
router.delete('/:id', verifyToken, isAdmin, deleteDoctor);

module.exports = router;
