import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthDevTestingService {
  testingJwtRoute(req): { name: string; message: string } {
    return { name: req.user.name, message: 'Jwt Auth working Fine' };
  }
}
