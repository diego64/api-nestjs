import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class NotificationTaskUserSchedule {
  @Cron(CronExpression.EVERY_10_SECONDS)
  getAllTasksDays() {
    console.log('Task OK' + new Date());
  }
}
