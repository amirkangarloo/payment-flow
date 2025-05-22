import { Body, Controller, Post } from '@nestjs/common';
import { DirectDebitService } from './direct-debit.service';
import { PayDirectDebitReqDto } from '@lib/common';

@Controller()
export class DirectDebitController {
  constructor(private readonly directDebitService: DirectDebitService) {}

  @Post('pay')
  pay(@Body() payload: PayDirectDebitReqDto) {
    return this.directDebitService.pay(payload.amount);
  }
}
