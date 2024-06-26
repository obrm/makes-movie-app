import winston from 'winston';

// Define your custom logging levels
const customLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6,
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    verbose: 'cyan',
    debug: 'blue',
    silly: 'grey',
  },
};

// Apply the colors to winston
winston.addColors(customLevels.colors);

// Custom format for log messages
const logFormat = winston.format.combine(
  winston.format.label({ label: 'movie-app' }),
  winston.format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
  winston.format.printf(
    info => `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`
  ),
  winston.format.colorize({ all: true })
);

// Create a Winston logger instance
const logger = winston.createLogger({
  levels: customLevels.levels,
  format: logFormat,
  transports: [
    // Console transport for logging
    new winston.transports.Console({
      level: 'debug', // Log only if info.level less than or equal to this level
    }),
  ],
});

export default logger;
