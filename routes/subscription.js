const express = require('express');
const SubscriptionController = require('../components/subscribers/SubscriptionController');

const router = express.Router();
router.post('/:topic',SubscriptionController.createSubscription);

module.exports = router;
