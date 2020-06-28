const queueConfig = require('../../../../config/queue');
const awsServiceProvider = require('../../cloud-providers/AwsServiceProvider')
class LeadSqsService {

  async ingestToSqs(msg) {
    const SQS_URL = queueConfig.host;

    const messageBody = {
      lead_id: {
        DataType: 'String',
        StringValue: msg.leadId,
      },
      target_id: {
        DataType: 'String',
        StringValue: msg.targetId,
      },
      type: {
        DataType: 'String',
        StringValue: 'LEAD',
      },
    };
    const objectParams = {
      DelaySeconds: parseInt(queueConfig.messageDeliveryDelay, 10),
      MessageAttributes: '',
      MessageBody: messageBody,
      QueueUrl: SQS_URL,
    };
    console.log(objectParams);

    const sqs = awsServiceProvider.getSQS();
    return sqs.sendMessage(objectParams).promise();
  }
}

module.exports = LeadSqsService;