import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';
import { validatePassword } from '../validation';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Prop({
    required: true,
    validate: {
      validator: validatePassword,
      message:
        'Password must be at least 8 characters long, contain at least 1 letter, 1 number, and 1 special character.',
    },
  })
  password: string;

  @Prop({ unique: [true, 'duplicate email!'] })
  @IsString()
  @IsNotEmpty()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
