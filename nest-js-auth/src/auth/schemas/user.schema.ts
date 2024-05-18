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
  })
  password: string;

  @Prop({ unique: [true, 'duplicate email!'] })
  @IsString()
  @IsNotEmpty()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
