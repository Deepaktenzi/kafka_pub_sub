import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConsumerService } from 'src/kafka/consumer/consumer.service';

@Injectable()
export class UpdateConsumer implements OnModuleInit {
  constructor(private _consumer: ConsumerService) {}

  async onModuleInit() {
    this._consumer.consume(
      'update-client',
      { topics: ['Update-Employee'] },
      {
        eachMessage: async ({ topic, partition, message }) => {
          console.log({
            source: 'Update-Employee-Consumer',
            value: message.value.toString(),
            partition: partition.toString(),
            topic: topic.toString(),
          });
        },
      },
    );
  }
}
