import { Controller, Get } from '@nestjs/common';
import { DirectDebitService } from './direct-debit.service';

@Controller()
export class DirectDebitController {
  constructor(private readonly directDebitService: DirectDebitService) {}

  @Get()
  getHello(): string {
    return this.directDebitService.getHello();
  }
}
