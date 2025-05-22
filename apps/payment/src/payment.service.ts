import { Injectable } from '@nestjs/common';
import { PayInstallmentReqDto, PayInstallmentResDto } from 'libs/connector/dto';

@Injectable()
export class PaymentService {
  payInstallment(payload: PayInstallmentReqDto): PayInstallmentResDto {
    console.log('payload: ', JSON.stringify(payload));

    return { status: 'ok' };
  }
}
