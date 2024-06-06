import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '../../infra/providers/auth-guard.provider';
import { CreateUserUseCase } from './useCases/create-user.usecase';
import { ProfileUserUseCase } from './useCases/profile-user.usecase';
import {
  CreateUserResponseSchemaDTO,
  CreateUserSchema,
  CreateUserSchemaDTO,
} from './schemas/create-user.schema';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileDTO } from './dto/user.dto';
import { UploadAvatarUserUseCase } from './useCases/upload-avatar-user.usecase';
import { zodToOpenAPI } from 'nestjs-zod';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

const schemaUserSwagger = zodToOpenAPI(CreateUserSchema);

@Controller('/users')
@ApiTags('users')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly profileUserUseCase: ProfileUserUseCase,
    private readonly uploadAvatarUserUseCase: UploadAvatarUserUseCase,
  ) {}

  @Post()
  @ApiBody({
    description: 'Create a new user',
    schema: schemaUserSwagger,
  })
  @ApiResponse({ status: 201, description: 'Create a new user successfully' })
  @ApiResponse({ status: 400, description: 'User already exists' })
  async create(@Body() data: CreateUserSchemaDTO) {
    const user = await this.createUserUseCase.execute(data);
    return CreateUserResponseSchemaDTO.parse(user);
  }

  @Get('/profile')
  @UseGuards(AuthGuard)
  async profile(@Request() req) {
    return this.profileUserUseCase.execute(req.user.sub);
  }

  @Put('/avatar')
  @UseInterceptors(FileInterceptor('file'))
  @UseGuards(AuthGuard)
  async uploadAvatar(@Request() req, @UploadedFile() file: FileDTO) {
    const result = await this.uploadAvatarUserUseCase.execute({
      file,
      idUser: req.user.sub,
    });
    return result;
  }
}
