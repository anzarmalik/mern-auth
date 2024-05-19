import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthDevTestingService } from './auth-dev-testing.service';
import { AuthGuard } from '@nestjs/passport';

/* This controller is just to check wether jwt token is working as expected!*/
@Controller('auth-dev-testing')
export class AuthDevTestingController {
  constructor(private readonly authDevTestingService: AuthDevTestingService) {}

  @Get()
  @UseGuards(AuthGuard())
  jwtTest(@Req() req): { name: string; message: string } {
    return this.authDevTestingService.testingJwtRoute(req);
  }
}
