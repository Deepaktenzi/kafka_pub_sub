import { Injectable, OnModuleInit } from '@nestjs/common';
import { Kafka, Producer, ProducerRecord } from 'kafkajs';

@Injectable()
export class ProducerService implements OnModuleInit {
  async onModuleInit() {
    await this.producer.connect();
  }
  private readonly kafka = new Kafka({
    brokers: ['localhost:9092'],
  });

  private readonly producer: Producer = this.kafka.producer();

  async produce(record: ProducerRecord) {
    const result = await this.producer.send(record);
    return result;
  }
}
