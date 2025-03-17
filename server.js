const express = require('express');
const app = express();

app.use(express.json());

// Temporary data storage (will be replaced by a database later)
let users = [];
let appointments = [];

// Create Account (Mock)
app.post('/create-account', (req, res) => {
    const user = { id: users.length + 1, ...req.body };
    users.push(user);
    res.json({ message: "User created", user });
});

// Find Business (Mock)
app.get('/find-business', (req, res) => {
    res.json(users); // Show all users for now
});

// Book Appointment (Mock)
app.post('/book-appointment', (req, res) => {
    const appointment = { id: appointments.length + 1, ...req.body };
    appointments.push(appointment);
    res.json({ message: "Appointment booked", appointment });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});