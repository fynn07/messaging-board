const express = require('express');
const { postChat, getAllChat } = require("../controller/chatController");
const cors = require('cors');
const rateLimiter = require('../config/rateLimiter')
const router = express.Router();

router.route('/chat').get(getAllChat);
router.route('/chat').post(rateLimiter, postChat);

module.exports = router