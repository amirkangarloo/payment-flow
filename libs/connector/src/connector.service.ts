import { PayInstallmentReqDto, PayInstallmentResDto } from '@lib/common';
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ConnectorService {
  constructor() {}

  async payInstallment(
    payload: PayInstallmentReqDto,
  ): Promise<PayInstallmentResDto> {
    const res = await axios.post<PayInstallmentResDto>(
      'http://localhost:3002/pay-installment',
      payload,
    );

    return res.data;
  }
}
