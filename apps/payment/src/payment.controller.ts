import { Body, Controller, Get, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PayInstallmentReqDto } from 'libs/connector/dto';

@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('pay-installment')
  payInstallment(@Body() payload: PayInstallmentReqDto) {
    return this.paymentService.payInstallment(payload);
  }
}
