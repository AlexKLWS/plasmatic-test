import { injectable } from 'inversify';
import { BehaviorSubject } from 'rxjs';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { UserAuthStatus } from '~/types/userAuthStatus';

export interface ISessionService {
  userStatus: BehaviorSubject<UserAuthStatus>;
  stopUpdates: () => void;
}

@injectable()
export class SessionService implements ISessionService {
  private readonly _userStatus: BehaviorSubject<UserAuthStatus> = new BehaviorSubject<UserAuthStatus>(
    UserAuthStatus.UNKNOWN,
  );
  private readonly _firebaseAuthStateChangeSubscriber: () => void;

  get userStatus() {
    return this._userStatus;
  }

  constructor() {
    this._firebaseAuthStateChangeSubscriber = auth().onAuthStateChanged(this.onFirebaseAuthStateChanged);
  }

  public stopUpdates = () => {
    if (this._firebaseAuthStateChangeSubscriber) {
      this._firebaseAuthStateChangeSubscriber();
    }
  };

  private onFirebaseAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    if (user) {
      this._userStatus.next(UserAuthStatus.AUTHORIZED);
    } else {
      this._userStatus.next(UserAuthStatus.UNAUTHORIZED);
    }
  };
}

export const SessionServiceId = Symbol('SessionService');
