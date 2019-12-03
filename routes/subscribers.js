const router = require('express').Router();
const subscribersController = require('../controllers/subscribers');
const getSubscriber = require('../middlewares/subscribers').getSubscriber;

router.get(
    '/',
    subscribersController.get
);

router.get(
    '/:id',
    getSubscriber,
    subscribersController.getById
);

router.post(
    '/',
    subscribersController.post
);

router.patch(
    '/:id',
    getSubscriber,
    subscribersController.patch
);

router.delete(
    '/:id',
    getSubscriber,
    subscribersController.delete
);

module.exports = router;