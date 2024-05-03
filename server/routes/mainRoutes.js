const express = require('express');
const { postChat, getAllChat } = require("../controller/chatController");
const router = express.Router();
const rateLimit = require('express-rate-limit');

const postRateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, 
    max: 10, 
    standardHeaders: true, 
    legacyHeaders: false, 
});

router.route('/chat').get(getAllChat);
router.route('/chat').post(postRateLimiter, postChat);

module.exports = router