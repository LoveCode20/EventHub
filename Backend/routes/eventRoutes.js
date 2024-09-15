const express = require('express');
const { createEvent, getEvents, getEventById } = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createEvent);
router.get('/', getEvents);
router.get('/:id', getEventById);

module.exports = router;
