import { Body, Controller, Get, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PayInstallmentReqDto } from '@lib/common';

@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('pay-installment')
  async payInstallment(@Body() payload: PayInstallmentReqDto) {
    return this.paymentService.payInstallment(payload);
  }
}
