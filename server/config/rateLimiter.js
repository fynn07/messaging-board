const { RateLimiterMemory } = require("rate-limiter-flexible");

const opts = {
    points: 4,
    duration: 30, 
  };
  
  const rateLimiter = new RateLimiterMemory(opts);

  const rateLimiterMiddleware = (req, res, next) => {
    rateLimiter.consume(req.ip, 1)
        .then((rateLimiterRes) => {
            next();
        })
        .catch((rateLimiterRes) => {
            res.status(429).send('Too Many Requests');
        });
  }

  module.exports = rateLimiterMiddleware;
