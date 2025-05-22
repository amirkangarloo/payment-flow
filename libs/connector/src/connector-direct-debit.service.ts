import { PayDirectDebitReqDto, PayDirectDebitResDto } from '@lib/common';
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ConnectorDirectDebitService {
  private BaseUrl = 'http://localhost:3003';
  constructor() {}

  async pay(payload: PayDirectDebitReqDto): Promise<PayDirectDebitResDto> {
    const res = await axios.post<PayDirectDebitResDto>(
      `${this.BaseUrl}/pay`,
      payload,
    );

    return res.data;
  }
}
