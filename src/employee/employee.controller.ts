import { Controller, Post, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';
@Controller('/employee')
export class EmployeeController {
  constructor(private _service: EmployeeService) {}
  @Post()
  async create() {
    return await this._service.create();
  }

  @Put()
  async update() {
    return await this._service.update();
  }
}