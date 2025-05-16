import { Injectable } from '@nestjs/common';

@Injectable()
export class LoanService {
  getHello(): string {
    return 'Hello World!';
  }
}
