import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDTO } from '../dto/user.dto';

@Injectable()
export class CreateUserValidationPipe implements PipeTransform {
  transform(
    { name, email, username, password }: CreateUserDTO,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    metadata: ArgumentMetadata,
  ) {
    if (!name || !email || !username || !password) {
      throw new HttpException(
        `[name, email, username, password] is required`,
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return {
      name,
      email,
      username,
      password,
    };
  }
}
