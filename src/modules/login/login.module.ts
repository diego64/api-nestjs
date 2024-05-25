import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { PrismaService } from 'src/infra/database/prisma.service';
import { SignInUseCase } from './useCases/sign-in.usecase';
import { JwtModule } from '@nestjs/jwt';
import { env } from 'process';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: env.JWT_SECRET,
      //secret: "MINHA_CHAVE_SECRETA"
      signOptions: { expiresIn: '10 minutes' },
    }),
  ],
  controllers: [LoginController],
  providers: [PrismaService, SignInUseCase],
})
export class LoginModule {}
