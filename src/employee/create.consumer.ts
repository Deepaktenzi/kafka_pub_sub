import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConsumerService } from 'src/kafka/consumer/consumer.service';

@Injectable()
export class CreateConsumer implements OnModuleInit {
  constructor(private _consumer: ConsumerService) {}

  async onModuleInit() {
    this._consumer.consume(
      'Create-Employee',
      { topics: ['Create-Employee'] },
      {
        eachMessage: async ({ topic, partition, message }) => {
          console.log({
            source: 'Create-Employee-Consumer',
            value: message.value.toString(),
            partition: partition.toString(),
            topic: topic.toString(),
          });
        },
      },
    );
  }
}