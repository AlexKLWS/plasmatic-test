import { injectable } from 'inversify';
import { BehaviorSubject } from 'rxjs';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import config from 'react-native-config';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { UserAuthStatus } from '~/types/userAuthStatus';

export interface ISessionService {
  firebaseUser: FirebaseAuthTypes.User | null;
  userStatus: BehaviorSubject<UserAuthStatus>;
  signIn: () => Promise<[FirebaseAuthTypes.UserCredential | null, Error | null]>;
  stopUpdates: () => void;
}

@injectable()
export class SessionService implements ISessionService {
  private readonly _userStatus: BehaviorSubject<UserAuthStatus> = new BehaviorSubject<UserAuthStatus>(
    UserAuthStatus.UNKNOWN,
  );
  private readonly _firebaseAuthStateChangeSubscriber: () => void;

  private _firebaseUser: FirebaseAuthTypes.User | null = null;

  get userStatus() {
    return this._userStatus;
  }

  get firebaseUser() {
    return this._firebaseUser;
  }

  constructor() {
    GoogleSignin.configure({
      webClientId: config.GOOGLE_WEB_CLIENT_ID,
    });
    this._firebaseAuthStateChangeSubscriber = auth().onAuthStateChanged(this.onFirebaseAuthStateChanged);
  }

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
    this._firebaseUser = user;
    if (user) {
      this._userStatus.next(UserAuthStatus.AUTHORIZED);
    } else {
      this._userStatus.next(UserAuthStatus.UNAUTHORIZED);
    }
  };
}

export const SessionServiceId = Symbol('SessionService');
