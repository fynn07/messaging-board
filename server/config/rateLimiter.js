const { RateLimiterMemory } = require("rate-limiter-flexible");

const opts = {
    points: 5,
    duration: 15, 
  };
  
  const rateLimiter = new RateLimiterMemory(opts);

  function rateLimiterMiddleware(req, res, next){
    console.log(req.ip)
  }

  module.exports = rateLimiterMiddleware;
