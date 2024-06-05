import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { NotificationTaskUserSchedule } from './notification-task-user.schedule';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [NotificationTaskUserSchedule],
})
export class ScheduleTaskModule {}
