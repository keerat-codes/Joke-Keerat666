
// Auto-generated by AutoPilot on 28-07-2023 at 12:53:22

const express = require('express');
const router = express.Router();

router.get('/jokev4', (req, res) => { // GET request on route /jokev4
    res.json({ joke: "Why don't scientists trust atoms? Because they make up everything!" }); // Return dad joke
});

module.exports = router; // Export router to use in other files