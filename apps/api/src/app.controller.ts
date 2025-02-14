import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { add } from '@autospace/sample-lib';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return `hello ${add(12, 2)}`;
  }
}
