import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectorModule } from '@lib/connector';

@Module({
  imports: [ConnectorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
