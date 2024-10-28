const express = require('express');
const {
    createAppointment,
    approveAppointment,
    rescheduleAppointment,
    searchAppointments,
} = require('../controllers/appointmentController');
const { verifyToken } = require('../middleware/authMiddleware');
const { isUser } = require('../middleware/roleMiddleware');
const router = express.Router();

router.post('/', verifyToken, isUser, createAppointment);
router.put('/:id/approve', verifyToken, approveAppointment);
router.put('/:id/reschedule', verifyToken, isUser, rescheduleAppointment);
router.get('/search', verifyToken, searchAppointments);

module.exports = router;
