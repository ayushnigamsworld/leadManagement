const AWS = require('aws-sdk');
class AwsServiceProvider {
  static getSQS() {
    const sqs = new AWS.SQS({ apiVersion: '2012-11-05', region: process.env.AWS_REGION });
    return sqs;
  }
}

module.exports = AwsServiceProvider;