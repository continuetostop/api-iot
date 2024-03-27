import { IsString } from 'class-validator';

export class LoginInput {
  @IsString()
  email: string;

  @IsString()
  password: string;
}

export class LoginOutput {
  @IsString()
  accessToken: string;
}
