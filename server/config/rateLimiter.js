const { RateLimiterMemory } = require("rate-limiter-flexible");

const opts = {
    points: 5,
    duration: 15, 
  };
  
  const rateLimiter = new RateLimiterMemory(opts);

  function rateLimiterMiddleware(req, res, next){
    rateLimiter.consume(req.ip, 1)
        .then((rateLimiterRes) => {
            next();
        })
        .catch((rateLimiterRes) => {
            res.status(429).send('Rate Limit Exceeded');
        });
  }

  module.exports = rateLimiterMiddleware;
