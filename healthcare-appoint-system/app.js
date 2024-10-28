require("dotenv").config();
const express = require('express');
const connection = require('./db/mongodb');
const userRoutes = require('./routes/userRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/docs.yaml');

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 5000;
app.listen(PORT, async() => {
    await connection
    console.log(`Server is running on http://localhost:${PORT}`);
});
