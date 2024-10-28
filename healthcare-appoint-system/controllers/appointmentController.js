const Appointment = require('../models/Appointment');

exports.createAppointment = async (req, res) => {
    const { doctor, date } = req.body;
    const appointment = new Appointment({ user: req.user.id, doctor, date });
    await appointment.save();
    res.status(201).json({ message: 'Appointment created', appointment });
};

exports.approveAppointment = async (req, res) => {
    const { id } = req.params;
    await Appointment.findByIdAndUpdate(id, { status: 'approved' });
    res.json({ message: 'Appointment approved' });
};

exports.rescheduleAppointment = async (req, res) => {
    const { id } = req.params;
    const { date } = req.body;
    await Appointment.findByIdAndUpdate(id, { date });
    res.json({ message: 'Appointment rescheduled' });
};

exports.searchAppointments = async (req, res) => {
    const { startDate, endDate, specialization, status } = req.query;
    const query = { status };

    if (startDate && endDate) {
        query.date = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }

    const appointments = await Appointment.find(query).populate('doctor');
    res.json(appointments);
};
