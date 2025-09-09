import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';
import { UserType } from 'generated/prisma';

export class CreateUserDto {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  password!: string;

  @IsEnum(UserType)
  type!: UserType;

  @IsOptional()
  @IsString()
  profilePhoto?: string;

  @IsOptional()
  @IsString()
  phone?: string;
}
