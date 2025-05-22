import { InvoiceEnum, InvoiceSchema } from '@lib/common';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class InvoiceRepo {
  private data: InvoiceSchema[] = [];

  constructor() {}

  create(amount: number): InvoiceSchema {
    const newDate = {
      id: this.data.length + 1,
      amount,
      status: InvoiceEnum.Success,
    };

    this.data.push(newDate);

    return newDate;
  }

  rollbackCreate(id: number): void {
    const d = this.data.find((item) => item.id === id);

    if (!d) {
      throw new NotFoundException('Invoice not found');
    }

    d.status = InvoiceEnum.Failed;
  }
}
