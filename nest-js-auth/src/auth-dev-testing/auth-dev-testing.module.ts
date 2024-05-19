import { Module } from '@nestjs/common';
import { AuthDevTestingController } from './auth-dev-testing.controller';
import { AuthDevTestingService } from './auth-dev-testing.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [AuthDevTestingController],
  providers: [AuthDevTestingService],
})
export class AuthDevTestingModule {}
