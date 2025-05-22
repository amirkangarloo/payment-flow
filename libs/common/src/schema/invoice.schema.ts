import { InvoiceEnum } from '@lib/common/enum';

export class InvoiceSchema {
  id: number;
  amount: number;
  status: InvoiceEnum;
}
