import { InstallmentSchema } from '@lib/common';
import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';

@Injectable()
export class InstallmentRepo implements OnModuleInit {
  private data: InstallmentSchema[] = [];

  onModuleInit() {
    for (let index = 1; index <= 10; index++) {
      this.data.push({
        id: index,
        amount: 1_000_000,
        isBlock: false,
        isPaid: false,
      });
    }
  }

  constructor() {}

  getAmountAndBlockInstallment(id: number): number {
    const d = this.data.find(
      (item) =>
        item.id === id && item.isBlock === false && item.isPaid === false,
    );

    if (!d) {
      throw new NotFoundException('Installment not found');
    }

    d.isBlock = true;

    return d.amount;
  }

  rollbackGetAmountAndBlockInstallment(id: number): void {
    const d = this.data.find((item) => item.id === id && item.isPaid === false);

    if (!d) {
      throw new NotFoundException('Installment not found');
    }

    d.isBlock = false;
  }

  payInstallmentAndUnblock(id: number): void {
    const d = this.data.find(
      (item) =>
        item.id === id && item.isBlock === true && item.isPaid === false,
    );

    if (!d) {
      throw new NotFoundException('Installment not found');
    }

    d.isBlock = false;
    d.isPaid = true;
  }

  rollbackPayInstallmentAndUnblock(id: number): void {
    const d = this.data.find(
      (item) =>
        item.id === id && item.isBlock === false && item.isPaid === true,
    );

    if (!d) {
      throw new NotFoundException('Installment not found');
    }

    d.isBlock = false;
    d.isPaid = false;
  }
}
