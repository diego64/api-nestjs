import { PrismaService } from 'src/infra/database/prisma.service';
import { ITaskUserRepository } from '../task-user.repository';
import {
  TaskUserNotificationDTO,
  TaskUserRequestDTO,
  TaskUserResponseDTO,
} from '../../dto/task-user.dto';
import { Injectable } from '@nestjs/common';
import { startOfDay, endOfDay } from 'src/infra/utils/date';

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

  async findAllStartDay(): Promise<TaskUserNotificationDTO[] | null> {
    const allTasks = await this.prisma.taskUser.findMany({
      where: {
        AND: [
          {
            task: {
              startAt: {
                gte: startOfDay(),
                lte: endOfDay(),
              },
            },
          },
        ],
      },
      include: {
        task: {
          select: {
            startAt: true,
            endAt: true,
            title: true,
            description: true,
          },
        },
        user: true,
      },
    });
    return allTasks;
  }
}
