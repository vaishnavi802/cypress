const express = require('express');
const router = express.Router();

const { SendMail } = require('./mail');

router.post('/form', async (req, res) => {
    const { name, email, message } = req.body;
    const Subject = 'New Message from ' + name;
    const Body = 'Name: ' + name + '<br>Email: ' + email + '<br>Message: ' + message;
    await SendMail("kulkarnivaishnavi499@gmail.com", Subject, Body);
    res.status(200).json({ message: 'Message sent successfully' });
});

module.exports = router;