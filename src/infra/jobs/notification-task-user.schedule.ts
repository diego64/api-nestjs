import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ITaskUserRepository } from 'src/modules/tasks/repositories/task-user.repository';

type MessageDTO = {
  name: string;
  email: string;
  title: string;
  description: string;
  startAt: Date;
  endAt: Date;
};

@Injectable()
export class NotificationTaskUserSchedule {
  constructor(
    private taskRepository: ITaskUserRepository,
    @Inject('NOTIFICATION') private readonly notificationClient: ClientKafka,
  ) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  async getAllTasksDays() {
    const allTasks = await this.taskRepository.findAllStartDay();

    if (allTasks) {
      allTasks.forEach((task) => {
        const message: MessageDTO = {
          name: task.user.name,
          email: task.user.email,
          title: task.task.title,
          description: task.task.description,
          startAt: task.task.startAt,
          endAt: task.task.endAt,
        };
        console.log(' === SEND NOTIFICATION === ');
        this.notificationClient.emit('tp_task_notification', message);
      });
    }
  }
}
