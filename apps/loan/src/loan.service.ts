import {
  GetAmountAndBlockInstallmentDto,
  PayInstallmentReqDto,
} from '@lib/common';
import { Injectable } from '@nestjs/common';
import { InstallmentRepo } from 'apps/loan/src/repository/installment.repo';

@Injectable()
export class LoanService {
  constructor(private readonly repo: InstallmentRepo) {}

  getAmountAndBlockInstallment(
    payload: PayInstallmentReqDto,
  ): GetAmountAndBlockInstallmentDto {
    const amount = this.repo.getAmountAndBlockInstallment(
      payload.installmentId,
    );

    return { amount };
  }

  rollbackGetAmountAndBlockInstallment(payload: PayInstallmentReqDto): void {
    return this.repo.rollbackGetAmountAndBlockInstallment(
      payload.installmentId,
    );
  }

  payInstallmentAndUnblock(payload: PayInstallmentReqDto): void {
    return this.repo.payInstallmentAndUnblock(payload.installmentId);
  }

  rollbackPayInstallmentAndUnblock(payload: PayInstallmentReqDto): void {
    return this.repo.rollbackPayInstallmentAndUnblock(payload.installmentId);
  }
}
