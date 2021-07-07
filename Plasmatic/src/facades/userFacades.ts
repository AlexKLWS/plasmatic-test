import { useEffect, useRef, useState } from 'react';
import { Subscription } from 'rxjs';

import { useInjection } from '~/services/serviceProvider';
import { onEmit } from '~/helpers/onEmit';
import { IUserService, UserServiceId } from '~/services/user';
import { User } from '~/types/user';

export const useUserAuthStatus = () => {
  const service = useRef(useInjection<IUserService>(UserServiceId));

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const subscriptions: Subscription[] = [
      onEmit<User | null>(service.current.user, value => {
        setUser(value);
      }),
    ];
    service.current.signInAndFetchUserByEmail;
    return () => {
      subscriptions.forEach(it => it.unsubscribe());
    };
  }, []);

  return { user };
};

export const useUserSignInAndFetch = () => {
  const service = useRef(useInjection<IUserService>(UserServiceId));

  const signInAndFetchUser = () => {
    return service.current.signInAndFetchUserByEmail();
  };

  return { signInAndFetchUser };
};
