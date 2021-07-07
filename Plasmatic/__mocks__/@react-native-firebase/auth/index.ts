const mockAuth: any = {};

mockAuth.onAuthStateChanged = jest.fn();
mockAuth.signInWithCredential = jest.fn();

const mockAuthFunction = () => mockAuth;
mockAuthFunction.GoogleAuthProvider = { credential: (token: string) => undefined };

export default () => mockAuth;
