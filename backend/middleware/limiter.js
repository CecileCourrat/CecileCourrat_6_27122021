const expressRateLimit = require('express-rate-limit');

const loginLimiter = expressRateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
  });

module.exports = { loginLimiter };