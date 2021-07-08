import { Container, interfaces, ContainerModule } from 'inversify';
import {
  INotificationAnalyticsService,
  NotificationAnalyticsService,
  NotificationAnalyticsServiceId,
} from './analytics/notificationsAnalytics';
import { INotificationService, NotificationService, NotificationServiceId } from './notifications';

import { ISessionService, SessionServiceId, SessionService } from './session';
import { IStorageService, StorageService, StorageServiceId } from './storage';
import { IUserService, UserService, UserServiceId } from './user';

export const containerModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<ISessionService>(SessionServiceId).to(SessionService).inSingletonScope();
  bind<IUserService>(UserServiceId).to(UserService).inSingletonScope();
  bind<IStorageService>(StorageServiceId).to(StorageService).inSingletonScope();
  bind<INotificationService>(NotificationServiceId).to(NotificationService).inSingletonScope();

  // Analytics
  bind<INotificationAnalyticsService>(NotificationAnalyticsServiceId).to(NotificationAnalyticsService);
});

export const container = new Container();
