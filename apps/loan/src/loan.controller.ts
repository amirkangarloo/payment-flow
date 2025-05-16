import { Controller, Get } from '@nestjs/common';
import { LoanService } from './loan.service';

@Controller()
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Get()
  getHello(): string {
    return this.loanService.getHello();
  }
}
