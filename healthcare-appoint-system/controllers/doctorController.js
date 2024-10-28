const Doctor = require('../models/Doctor');

exports.addDoctor = async (req, res) => {
    const { name, specialization, availability } = req.body;
    const doctor = new Doctor({ name, specialization, availability });
    await doctor.save();
    res.status(201).json({ message: 'Doctor added' });
};

exports.updateDoctor = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    await Doctor.findByIdAndUpdate(id, updates);
    res.json({ message: 'Doctor updated' });
};

exports.deleteDoctor = async (req, res) => {
    const { id } = req.params;
    await Doctor.findByIdAndDelete(id);
    res.json({ message: 'Doctor deleted' });
};
