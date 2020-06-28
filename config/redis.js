let cacheConfig;

switch (process.env.NODE_ENV) {
  case 'production':
    cacheConfig = {
      host: '',
      port: 6379,
      password: null,
      family: 4,
      db: 0,
    };
    break;
  case 'testing':
    cacheConfig = {
      host: '',
      port: 6379,
      password: null,
      family: 4,
      db: 0,
    };
    break;
  default:
    cacheConfig = {
      host: 'localhost',
      port: 6379,
      password: null,
      family: 4,
      db: 0,
    };
}

module.exports = cacheConfig;