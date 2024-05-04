const express = require('express');
const { postChat, getAllChat } = require("../controller/chatController");
const rateLimiter = require("../config/rateLimiter")
const router = express.Router();

router.route('/chat').post(postChat);
router.route('/chat').get(getAllChat);

module.exports = router