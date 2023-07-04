import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { KafkaModule } from 'src/kafka/kafka.module';
import { CreateConsumer } from './create.consumer';
import { UpdateConsumer } from './update.consumer';
import { EmployeeController } from './employee.controller';

@Module({
  imports: [KafkaModule],
  controllers: [EmployeeController],
  providers: [EmployeeService, CreateConsumer, UpdateConsumer],
})
export class EmployeeModule {}
