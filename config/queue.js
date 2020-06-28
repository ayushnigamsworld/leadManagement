let queueConfig;

switch (process.env.NODE_ENV) {
  case 'production':
    queueConfig = {
      host: '',
      messageTimeout: 300,
      messageRetentionPeriod: 14,
      messageDeliveryDelay: 30,
    };
    break;
  case 'testing':
    queueConfig = {
      host: '',
      messageTimeout: 300,
      messageRetentionPeriod: 14,
      messageDeliveryDelay: 30,
    };
    break;
  default:
    queueConfig = {
      host: '',
      messageTimeout: 300,
      messageRetentionPeriod: 14,
      messageDeliveryDelay: 30,
    };
}

module.exports = queueConfig;