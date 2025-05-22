import { NestFactory } from '@nestjs/core';
import { PaymentModule } from './payment.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const port = 3002;
  const app = await NestFactory.create(PaymentModule);
  await app.listen(port);

  Logger.log(`App listen on port ${port}`);
}
bootstrap();
