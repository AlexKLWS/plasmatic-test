import { inject, injectable } from 'inversify';
import firestore from '@react-native-firebase/firestore';
import { BehaviorSubject } from 'rxjs';

import { User } from '~/types/user';
import { ISessionService, SessionServiceId } from './session';

export interface IUserService {
  user: BehaviorSubject<User | null>;
  fetchUserByEmail: (email: string) => Promise<[User | null, Error | null]>;
  signInAndFetchUserByEmail: () => Promise<Error | null>;
}

@injectable()
export class UserService implements IUserService {
  private readonly _sessionService: ISessionService;

  private readonly _user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  get user(): BehaviorSubject<User | null> {
    return this._user;
  }

  constructor(@inject(SessionServiceId) sessionService: ISessionService) {
    this._sessionService = sessionService;
  }

  public fetchUserByEmail = async (email: string): Promise<[User | null, Error | null]> => {
    const usersQuerySnapshot = await firestore().collection('users').where('email', '==', email).get();
    if (usersQuerySnapshot.empty) {
      return [null, new Error('User not found!')];
    }
    if (usersQuerySnapshot.size > 1) {
      return [null, new Error('More than one user with the same email')];
    }
    const user = usersQuerySnapshot.docs[0].data() as User;
    this._user.next(user);
    return [user, null];
  };

  public signInAndFetchUserByEmail = async () => {
    const [firebaseUserCredential, error] = await this._sessionService.signIn();
    const email = firebaseUserCredential?.user.email;
    if (email) {
      const [_, userFetchError] = await this.fetchUserByEmail(email);
      return userFetchError;
    }
    return error;
  };
}

export const UserServiceId = Symbol('UserService');
