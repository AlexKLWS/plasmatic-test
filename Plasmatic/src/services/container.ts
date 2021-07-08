import { Container, interfaces, ContainerModule } from 'inversify';

import { ISessionService, SessionServiceId, SessionService } from './session';
import { IUserService, UserService, UserServiceId } from './user';

export const containerModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<ISessionService>(SessionServiceId).to(SessionService).inSingletonScope();
  bind<IUserService>(UserServiceId).to(UserService).inSingletonScope();
});

export const container = new Container();
