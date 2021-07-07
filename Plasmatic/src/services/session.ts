import { injectable } from 'inversify';
import { BehaviorSubject } from 'rxjs';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { UserAuthStatus } from '~/types/userAuthStatus';

export interface ISessionService {
  userStatus: BehaviorSubject<UserAuthStatus>;
  signInAndFetchUser: () => Promise<Error | null>;
  signIn: () => Promise<[FirebaseAuthTypes.UserCredential | null, Error | null]>;
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
    GoogleSignin.configure({
      webClientId: '',
    });
    this._firebaseAuthStateChangeSubscriber = auth().onAuthStateChanged(this.onFirebaseAuthStateChanged);
  }

  public signInAndFetchUser = async () => {
    const [firebaseUserCredential, error] = await this.signIn();
    if (firebaseUserCredential?.user) {
      this._userStatus.next(UserAuthStatus.AUTHORIZED);
    }
    return error;
  };

  public stopUpdates = () => {
    if (this._firebaseAuthStateChangeSubscriber) {
      this._firebaseAuthStateChangeSubscriber();
    }
  };

  public signIn = async (): Promise<[FirebaseAuthTypes.UserCredential | null, Error | null]> => {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const firebaseUserCredential = await auth().signInWithCredential(googleCredential);
      return [firebaseUserCredential, null];
    } catch (e) {
      console.log(e);
      return [null, e];
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
