const GoogleSignin: any = {};

GoogleSignin.signIn = jest.fn(() => Promise.resolve({ idToken: 'GOOGLE_AUTH_TOKEN' }));
GoogleSignin.configure = jest.fn();

export { GoogleSignin };
