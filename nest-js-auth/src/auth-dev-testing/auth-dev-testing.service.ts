import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthDevTestingService {
  testingJwtRoute(): string {
    return 'Jwt Auth working Fine';
  }
}
