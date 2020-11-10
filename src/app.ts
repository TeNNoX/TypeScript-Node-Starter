import _ from 'lodash'
import logger from './util/logger'

export async function start () {
  void (async () => {
    try {
      logger.info('Hello World')
    } catch (e) {
      console.error('App Error', e)
      process.exit(1)
    }
  })()
}
