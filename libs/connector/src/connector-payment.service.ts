import { PayInstallmentReqDto, PayInstallmentResDto } from '@lib/common';
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ConnectorPaymentService {
  private BaseUrl = 'http://localhost:3002';
  constructor() {}

  async payInstallment(
    payload: PayInstallmentReqDto,
  ): Promise<PayInstallmentResDto> {
    const res = await axios.post<PayInstallmentResDto>(
      `${this.BaseUrl}/pay-installment`,
      payload,
    );

    return res.data;
  }
}
