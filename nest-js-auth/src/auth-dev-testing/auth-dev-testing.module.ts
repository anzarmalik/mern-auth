import { Module } from '@nestjs/common';
import { AuthDevTestingController } from './auth-dev-testing.controller';
import { AuthDevTestingService } from './auth-dev-testing.service';
import { AuthModule } from 'src/auth/auth.module';

/* This controller is just to check wether jwt token is working as expected!
To ensure future restricted api's will work as expected
*/

@Module({
  imports: [AuthModule],
  controllers: [AuthDevTestingController],
  providers: [AuthDevTestingService],
})
export class AuthDevTestingModule {}
