import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() signUpInput: SignUpDto): Promise<{ token: string }> {
    return this.authService.signUp(signUpInput);
  }

  @Post('/signin')
  login(@Body() signInInput: LoginDto): Promise<{ token: string }> {
    return this.authService.login(signInInput);
  }
}
