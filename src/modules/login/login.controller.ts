import { Body, Controller, Post } from '@nestjs/common';
import { SignInUseCase } from './useCases/sign-in.usecase';
import { SignInDTO } from './dto/sign-in.dto';

@Controller()
export class LoginController {
  constructor(private signInUseCase: SignInUseCase) {}

  @Post('/signIn')
  async signIn(@Body() signInDTO: SignInDTO) {
    const token = await this.signInUseCase.execute(signInDTO);
    return token;
  }
}
