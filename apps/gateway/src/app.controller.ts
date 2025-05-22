import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PayInstallmentReqDto } from '@lib/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('pay-installment')
  payInstallment(@Body() payload: PayInstallmentReqDto) {
    return this.appService.payInstallment(payload);
  }
}
