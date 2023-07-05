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
        // eachBatch: async ({
        //   batch,
        //   resolveOffset,
        //   heartbeat,
        //   isRunning,
        //   uncommittedOffsets,
        // }) => {
        //   for (const message of batch.messages) {
        //     console.log({
        //       partition: batch.partition,
        //       source: 'Update-Employee-Consumer',
        //       value: message.value.toString(),
        //       topic: batch.topic,
        //       offset: message.offset,
        //     });
        //     await resolveOffset(message.offset);
        //   }
        //   if()
        // },
        eachMessage: async ({ topic, message, partition }) => {
          console.log({
            partition: partition,
            offset: message.offset,
            source: 'Update-Employee-Consumer',
            value: message.value.toString(),
            topic: topic.toString(),
          });

          if (message.offset == '340') {
            throw new Error('Error in offset 212');
          }
        },
      },
    );
  }
}
