import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { NotificationTaskUserSchedule } from './notification-task-user.schedule';
import { ITaskUserRepository } from 'src/modules/tasks/repositories/task-user.repository';
import { TaskUserPrismaRepository } from 'src/modules/tasks/repositories/prisma/task-user.prisma.repository';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [
    NotificationTaskUserSchedule,
    {
      provide: ITaskUserRepository,
      useClass: TaskUserPrismaRepository,
    },
  ],
})
export class ScheduleTaskModule {}
