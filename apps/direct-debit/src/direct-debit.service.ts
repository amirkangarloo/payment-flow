import { Injectable } from '@nestjs/common';

@Injectable()
export class DirectDebitService {
  getHello(): string {
    return 'Hello World!';
  }
}
