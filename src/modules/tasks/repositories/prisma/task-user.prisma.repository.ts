import { PrismaService } from 'src/infra/database/prisma.service';
import { ITaskUserRepository } from '../task-user.repository';
import {
  TaskUserRequestDTO,
  TaskUserResponseDTO,
} from '../../dto/task-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskUserPrismaRepository implements ITaskUserRepository {
  constructor(private prisma: PrismaService) {}

  async save(data: TaskUserRequestDTO): Promise<TaskUserResponseDTO> {
    return this.prisma.taskUser.create({
      data: {
        task: {
          create: {
            title: data.title,
            description: data.description,
            priority: data.priority,
            status: data.status,
            startAt: data.startAt,
            endAt: data.endAt,
          },
        },
        user: {
          connect: {
            id: data.userId,
          },
        },
      },
    });
  }
}
