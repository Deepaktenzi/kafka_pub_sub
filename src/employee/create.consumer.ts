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
        eachMessage: async ({ topic, message }) => {
          console.log({
            source: 'Create-Employee-Consumer',
            offset: message.offset,
            value: message.value.toString(),
            topic: topic.toString(),
          });
        },
      },
    );
  }
}
