import { Injectable } from '@nestjs/common';
import { ProducerService } from 'src/kafka/producer/producer.service';

@Injectable()
export class EmployeeService {
  constructor(private _kafka: ProducerService) {}

  async create(body: any) {
    console.log('\n Create Call ');
    const { data } = body;
    this._kafka.produce({
      topic: 'Create-Employee',
      messages: [
        {
          value: 'Employee created + ' + data,
        },
      ],
    });
    return 'Create Employee Call Produced';
  }

  async update(body: any) {
    console.log('\n Update Call');
    this._kafka.produce({
      topic: 'Update-Employee',
      messages: [{ value: 'Employee updated Message ' + body.data }],
    });
    return 'Update Employee Call Produced';
  }
}
