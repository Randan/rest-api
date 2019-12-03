const Subscriber = require('../models/subscriber');

module.exports = {
    getSubscriber: async (req, res, next) => {
        try {
            subscriber = await Subscriber.findById(req.params.id);

            if (subscriber === null)
                return res.status(404).json({ message: "Can't find subscriber" });
        } catch(err) {
            return res.status(500).json({ message: err.message });
        }

        res.subscriber = subscriber;
        next();
    }
};