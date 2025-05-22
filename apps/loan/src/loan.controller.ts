import { Body, Controller, Post } from '@nestjs/common';
import { LoanService } from './loan.service';
import {
  GetAmountAndBlockInstallmentDto,
  PayInstallmentReqDto,
} from '@lib/common';

@Controller()
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Post('get-amount')
  getAmountAndBlockInstallment(
    @Body() payload: PayInstallmentReqDto,
  ): GetAmountAndBlockInstallmentDto {
    return this.loanService.getAmountAndBlockInstallment(payload);
  }

  @Post('get-amount/rollback')
  rollbackGetAmountAndBlockInstallment(
    @Body() payload: PayInstallmentReqDto,
  ): void {
    return this.loanService.rollbackGetAmountAndBlockInstallment(payload);
  }

  @Post('pay-installment')
  payInstallmentAndUnblock(@Body() payload: PayInstallmentReqDto): void {
    return this.loanService.payInstallmentAndUnblock(payload);
  }

  @Post('pay-installment/rollback')
  rollbackPayInstallmentAndUnblock(
    @Body() payload: PayInstallmentReqDto,
  ): void {
    return this.loanService.rollbackPayInstallmentAndUnblock(payload);
  }
}
