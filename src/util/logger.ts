import pino from 'pino'

const logger = pino({
  level: process.env.NODE_ENV !== 'production' ? 'debug' : 'info',
  prettyPrint: true,
})

if (process.env.NODE_ENV !== 'production') {
  logger.debug('Logging initialized at debug level')
}

export default logger
