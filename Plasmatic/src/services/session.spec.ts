import { Container } from 'inversify';
import mockAuth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { ISessionService, SessionServiceId, SessionService } from '~/services/session';
import { UserAuthStatus } from '~/types/userAuthStatus';

const mockUser = {
  displayName: 'Alex',
  email: 'alexkorzh7@gmail.com',
  emailVerified: true,
  isAnonymous: false,
  metadata: {},
  phoneNumber: 'number',
  photoURL: 'url',
  providerData: [],
  providerId: 'facebook.com',
  uid: 'MOCK_ID',
};

describe('userStatus', () => {
  it('User status should be unauthorized', done => {
    // @ts-expect-error
    mockAuth().onAuthStateChanged.mockImplementationOnce((callback: (user: FirebaseAuthTypes.User | null) => void) => {
      callback(null);
      done();
    });

    const myContainer = new Container();
    myContainer.bind<ISessionService>(SessionServiceId).to(SessionService);

    const instance = myContainer.get<ISessionService>(SessionServiceId);

    const subscriptionCallback = jest.fn();

    instance.userStatus.subscribe(subscriptionCallback);

    expect(subscriptionCallback).toBeCalledWith(UserAuthStatus.UNAUTHORIZED);
  });
  it('User status should be authorized', done => {
    // @ts-expect-error
    mockAuth().onAuthStateChanged.mockImplementationOnce((callback: (user: FirebaseAuthTypes.User | null) => void) => {
      callback(mockUser as any);
      done();
    });

    const myContainer = new Container();
    myContainer.bind<ISessionService>(SessionServiceId).to(SessionService);

    const instance = myContainer.get<ISessionService>(SessionServiceId);

    const subscriptionCallback = jest.fn();

    instance.userStatus.subscribe(subscriptionCallback);

    expect(subscriptionCallback).toBeCalledWith(UserAuthStatus.AUTHORIZED);
  });
});
