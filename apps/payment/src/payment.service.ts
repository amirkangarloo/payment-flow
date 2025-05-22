import { PayInstallmentReqDto, PayInstallmentResDto } from '@lib/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {
  payInstallment(payload: PayInstallmentReqDto): PayInstallmentResDto {
    console.log('payload: ', JSON.stringify(payload));

    return { status: 'ok' };
  }
}
