const winston = require('winston');
const NODE_ENV = 'development' || process.env.NODE_ENV;
// Define log format
const logFormat = winston.format.printf(
  ({ level, message, timestamp, label }) => {
    const filename = __filename.split('/').pop();
    return `${timestamp} [${level.toUpperCase()}] ${filename} - ${message}`;
  }
);

// Create a logger instance
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    logFormat
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/app.log' }),
  ],
});

// Customize logger configuration based on environment
if (NODE_ENV === 'production') {
  // Production configuration
  logger.remove(winston.transports.Console);
} else if (NODE_ENV === 'development') {
  // Development configuration
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    })
  );
}

module.exports = logger;
