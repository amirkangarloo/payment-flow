import {
  GetAmountAndBlockInstallmentDto,
  PayInstallmentReqDto,
} from '@lib/common';
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ConnectorLoanService {
  private BaseUrl = 'http://localhost:3001';
  constructor() {}

  async getAmountAndBlockInstallment(
    payload: PayInstallmentReqDto,
  ): Promise<GetAmountAndBlockInstallmentDto> {
    const res = await axios.post<GetAmountAndBlockInstallmentDto>(
      `${this.BaseUrl}/get-amount`,
      payload,
    );

    return res.data;
  }

  async rollbackGetAmountAndBlockInstallment(
    payload: PayInstallmentReqDto,
  ): Promise<void> {
    const res = await axios.post<void>(
      `${this.BaseUrl}/get-amount/rollback`,
      payload,
    );

    return res.data;
  }

  async payInstallmentAndUnblock(payload: PayInstallmentReqDto): Promise<void> {
    const res = await axios.post<void>(
      `${this.BaseUrl}/pay-installment`,
      payload,
    );

    return res.data;
  }

  async rollbackPayInstallmentAndUnblock(
    payload: PayInstallmentReqDto,
  ): Promise<void> {
    const res = await axios.post<void>(
      `${this.BaseUrl}/pay-installment/rollback`,
      payload,
    );

    return res.data;
  }
}
