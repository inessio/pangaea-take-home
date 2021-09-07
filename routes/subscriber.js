const express = require('express');
const SubscriptionController = require('../components/subscribers/SubscriptionController');

const router = express.Router();
router.post('/:subscriber',SubscriptionController.receiveMessage);

module.exports = router;
