import { Injectable } from '@nestjs/common';
import { ProducerService } from 'src/kafka/producer/producer.service';

@Injectable()
export class EmployeeService {
  constructor(private _kafka: ProducerService) {}

  async create() {
    console.log('\n Create Call ');
    this._kafka.produce({
      topic: 'Create-Employee',
      messages: [
        {
          value: 'Employee created',
        },
      ],
    });
    return 'Employee created return : EmployeeService';
  }

  async update() {
    console.log('\n Update Call');
    this._kafka.produce({
      topic: 'Update-Employee',
      messages: [{ value: 'Employee updated' }],
    });
    return 'Employee updated Return : EmployeeService';
  }
}
