import { NestFactory } from '@nestjs/core';
import { DirectDebitModule } from './direct-debit.module';

async function bootstrap() {
  const app = await NestFactory.create(DirectDebitModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
