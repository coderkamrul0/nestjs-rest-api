/* eslint-disable prettier/prettier */
import { Schema, Prop } from '@nestjs/mongoose';
import { SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  name: string;

  @Prop({ unique: [true, 'Email already used'] })
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
