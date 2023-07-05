import { Injectable } from '@nestjs/common';
import { ProducerService } from 'src/kafka/producer/producer.service';

@Injectable()
export class EmployeeService {
  constructor(private _kafka: ProducerService) {}

  async create(body: any) {
    console.log('\n Create Call ');
    for (let i = 0; i < 10; i++) {
      const result = await this._kafka.produce({
        topic: 'Create-Employee',
        messages: [
          {
            value: JSON.stringify(body),
          },
        ],
        acks: 0,
      });
      console.log(result);
    }
    return 'Create Employee Call Produced';
  }

  async update(body: any) {
    console.log('\n Update Call');
    for (let i = 0; i < 10; i++) {
      const result = await this._kafka.produce({
        topic: 'Update-Employee',
        messages: [{ value: JSON.stringify(body) }],
        acks: 1,
      });
      console.log(result);
    }
    return 'Update Employee Call Produced';
  }
}
