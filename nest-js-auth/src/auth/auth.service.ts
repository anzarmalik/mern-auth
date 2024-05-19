import {
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
    private readonly logger: Logger, // instantiate logger
  ) {}
  SERVICE: string = AuthService.name;

  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    try {
      const { name, email, password } = signUpDto;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await this.userModel.create({
        name,
        email,
        password: hashedPassword,
      });

      const token = this.jwtService.sign({ id: user._id });
      this.logger.log(`User created successfully - ${user._id}`, this.SERVICE);

      return { token };
    } catch (error) {
      // user logger
      this.logger.error('Unable to create user', error.stack, this.SERVICE);

      if (error.code === 11000)
        throw new HttpException('Email already exists', HttpStatus.CONFLICT);

      throw new HttpException(
        `${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async login(loginDto: LoginDto): Promise<{ token: string }> {
    try {
      const { email, password } = loginDto;
      const user = await this.userModel.findOne({
        email,
      });
      if (!user) {
        throw new UnauthorizedException('Invalid Email Or Password');
      }
      const isPasswordMatched = await bcrypt.compare(password, user.password);
      if (!isPasswordMatched) {
        this.logger.warn(`User Invalid password- ${user._id}`, this.SERVICE);
        throw new UnauthorizedException('Invalid Email Or Password');
      }
      const token = this.jwtService.sign({ id: user._id });
      this.logger.log(`User signIn successfully - ${user._id}`, this.SERVICE);
      return { token };
    } catch (error) {
      // user logger
      this.logger.error('Unable to login', error.stack, this.SERVICE);
      throw new HttpException(
        `${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
