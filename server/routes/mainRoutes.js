const express = require('express');
const { postChat, getAllChat } = require("../controller/chatController");
const rateLimiter = require('../config/rateLimiter')
const router = express.Router();

router.route('/chat').get(getAllChat);
router.route('/chat').post(postChat);

module.exports = router