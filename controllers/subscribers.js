const Subscriber = require('../models/subscriber');

module.exports = {
    get: async (req, res) => {
        try {
            const subscribers = await Subscriber.find();
            res.json(subscribers);
        } catch(err) {
            res.status(500).json({ message: err.message });
        }
    },

    getById: (req, res) => res.json(res.subscriber),

    post: async (req, res) => {
        const subscriber = new Subscriber({
            name: req.body.name,
            subscribedChannel: req.body.subscribedChannel
        });

        try {
            const newSubscriber = await subscriber.save();
            res.status(201).json(newSubscriber);
        } catch(err) {
            res.status(400).json({ message: err.message });
        }
    },

    patch: async (req, res) => {
        if (req.body.name != null)
            res.subscriber.name = req.body.name;

        if (req.body.subscribedChannel != null)
            res.subscriber.subscribedChannel = req.body.subscribedChannel;

        try {
            const updatedSubscriber = await res.subscriber.save();
            res.json(updatedSubscriber);
        } catch(err) {
            res.status(400).json({ message: err.message });
        }
    },

    delete: async (req, res) => {
        try {
            await res.subscriber.remove();
            res.json({ message: 'Deleted This Subscriber' });
        } catch(err) {
            res.status(500).json({ message: err.message });
        }
    }
};