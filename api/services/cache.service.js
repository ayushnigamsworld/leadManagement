const IORedis = require('ioredis');
const redisConfig = require('../../config/redis');

class CacheService {
  static getIORedisInstance() {
    //TODO: Make this singleton
    return new IORedis(redisConfig);
  }

  static keyNameGenerator(key) {
    /**
     * TODO: Some business logic here.
     */
    return `location_${key}`;
  }
}

module.exports = CacheService;