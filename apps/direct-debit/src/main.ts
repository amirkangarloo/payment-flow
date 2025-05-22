import { NestFactory } from '@nestjs/core';
import { DirectDebitModule } from './direct-debit.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const port = 3003;
  const app = await NestFactory.create(DirectDebitModule);
  await app.listen(port);

  Logger.log(`App listen on port ${port}`);
}
bootstrap();
