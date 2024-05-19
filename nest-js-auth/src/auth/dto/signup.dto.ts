import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(30)
  @Matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/, {
    message:
      'Password must contain at least one letter, one number, and one special character.',
  })
  readonly password: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please Enter Correct Email!' })
  readonly email: string;
}
