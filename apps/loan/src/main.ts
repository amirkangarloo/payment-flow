import { NestFactory } from '@nestjs/core';
import { LoanModule } from './loan.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const port = 3001;
  const app = await NestFactory.create(LoanModule);
  await app.listen(port);

  Logger.log(`App listen on port ${port}`);
}
bootstrap();
