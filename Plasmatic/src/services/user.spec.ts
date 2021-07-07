import { BehaviorSubject } from 'rxjs';
import mockFirestore from '@react-native-firebase/firestore';
import { Container, injectable } from 'inversify';

import { IUserService, UserService, UserServiceId } from '~/services/user';
import { ISessionService, SessionServiceId } from '~/services/session';
import { UserAuthStatus } from '~/types/userAuthStatus';
import { mockFirebaseUser } from './session.spec';

const mockUser = {
  displayName: 'Alex',
  email: 'alexkorzh7@gmail.com',
  photoURL: 'pic1',
};

describe('fetchUserByEmail', () => {
  it('Should successfully fetch user by email', async () => {
    @injectable()
    class SessionServiceMock implements ISessionService {
      userStatus: BehaviorSubject<UserAuthStatus> = new BehaviorSubject<UserAuthStatus>(UserAuthStatus.AUTHORIZED);
      signIn = () => Promise.resolve([{ user: mockFirebaseUser }, null] as any);
      stopUpdates: () => void = () => undefined;
    }

    // @ts-expect-error
    mockFirestore().collection.mockImplementationOnce((collectionName: string) => {
      expect(collectionName).toEqual('users');
      return {
        where: (leftValue: string, operator: string, rightValue: string) => {
          expect(leftValue).toEqual('email');
          expect(operator).toEqual('==');
          expect(rightValue).toEqual('alexkorzh7@gmail.com');
          return {
            get: () => {
              return new Promise(resolve => {
                resolve({
                  empty: false,
                  size: 1,
                  docs: [{ data: () => mockUser }],
                });
              });
            },
          };
        },
      };
    });

    const myContainer = new Container();
    myContainer.bind<IUserService>(UserServiceId).to(UserService);
    myContainer.bind<ISessionService>(SessionServiceId).to(SessionServiceMock);

    const instance = myContainer.get<IUserService>(UserServiceId);
    const [user, error] = await instance.fetchUserByEmail('alexkorzh7@gmail.com');
    expect(user).toEqual(mockUser);
    expect(error).toBeFalsy();
  });
});
