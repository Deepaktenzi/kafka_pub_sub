import { Controller, Post, Put, Body } from '@nestjs/common';
import { EmployeeService } from './employee.service';
@Controller('/employee')
export class EmployeeController {
  constructor(private _service: EmployeeService) {}
  @Post()
  async create(@Body() body: any) {
    return await this._service.create(body);
  }

  @Put()
  async update(@Body() body: any) {
    return await this._service.update(body);
  }
}
