const express = require('express');
const TopicController = require('../components/topics/TopicController');

const router = express.Router();
router.post('',TopicController.createTopic);

module.exports =  router;