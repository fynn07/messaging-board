const express = require('express');
const { postChat, getAllChat } = require("../controller/chatController");
const { rateLimiterMiddleware } = require("../config/rateLimiter");
const router = express.Router();

router.route('/chat').get(getAllChat);
router.post('/chat', rateLimiterMiddleware);
router.route('/chat').post(postChat);

module.exports = router