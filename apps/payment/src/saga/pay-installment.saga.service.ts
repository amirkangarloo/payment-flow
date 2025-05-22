import { PayInstallmentResDto, PayInstallmentStatusEnum } from '@lib/common';
import { Injectable, Logger } from '@nestjs/common';
import { PayInstallmentSagaDto } from 'apps/payment/src/saga/dto';
import {
  CreateInvoiceStep,
  GetInstallmentAmountStep,
  PaidInstallmentStep,
  PayDirectDebitStep,
} from 'apps/payment/src/saga/step/service';
import { Step } from 'apps/payment/src/saga/step/step';

@Injectable()
export class PayInstallmentSagaService {
  private steps: Step<PayInstallmentSagaDto, PayInstallmentSagaDto>[] = [];

  constructor(
    private readonly step1: GetInstallmentAmountStep,
    private readonly step2: CreateInvoiceStep,
    private readonly step3: PaidInstallmentStep,
    private readonly step4: PayDirectDebitStep,
  ) {
    this.steps = [step1, step2, step3, step4];
  }

  async execute(message: PayInstallmentSagaDto): Promise<PayInstallmentResDto> {
    let payload: PayInstallmentSagaDto = { ...message };
    const successfulSteps: Step<
      PayInstallmentSagaDto,
      PayInstallmentSagaDto
    >[] = [];

    for (const step of this.steps) {
      try {
        Logger.log(`payload: ${JSON.stringify(payload)}`);
        Logger.log(`Invoke step: ${step.name}`);

        payload = await step.invoke(payload);

        successfulSteps.unshift(step);
      } catch (error) {
        Logger.error(`Failed step: ${step.name}`);

        for (const step of successfulSteps) {
          console.info(`Rollback step: ${step.name} ...`);
          payload = await step.rollback(payload);
        }

        return { status: PayInstallmentStatusEnum.Failed };
      }
    }

    return { status: PayInstallmentStatusEnum.Success };
  }
}
