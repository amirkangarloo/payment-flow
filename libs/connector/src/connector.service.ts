import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PayInstallmentReqDto, PayInstallmentResDto } from 'libs/connector/dto';

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
