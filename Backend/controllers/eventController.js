const Event = require('../models/Event');

// Create a new event
exports.createEvent = async (req, res) => {
    try {
        const { title, description, date, location } = req.body;
        const event = new Event({
            title,
            description,
            date,
            location,
            organizer: req.userId,
        });
        await event.save();
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all events
exports.getEvents = async (req, res) => {
    try {
        const events = await Event.find().populate('organizer', 'name email');
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get an event by ID
exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id).populate('organizer', 'name email');
        if (!event) return res.status(404).json({ message: 'Event not found' });
        res.json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
