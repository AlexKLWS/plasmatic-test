import { Container, interfaces, ContainerModule } from 'inversify';

import { ISessionService, SessionServiceId, SessionService } from './session';
import { IStorageService, StorageService, StorageServiceId } from './storage';
import { IUserService, UserService, UserServiceId } from './user';

export const containerModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<ISessionService>(SessionServiceId).to(SessionService).inSingletonScope();
  bind<IUserService>(UserServiceId).to(UserService).inSingletonScope();
  bind<IStorageService>(StorageServiceId).to(StorageService).inSingletonScope();
});

export const container = new Container();
