// dto/create-user.dto.ts
import { IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(1, 500)
  Name: string;
}
