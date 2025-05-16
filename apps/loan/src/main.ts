import { NestFactory } from '@nestjs/core';
import { LoanModule } from './loan.module';

async function bootstrap() {
  const app = await NestFactory.create(LoanModule);
  await app.listen(process.env.port ?? 3001);
}
bootstrap();
