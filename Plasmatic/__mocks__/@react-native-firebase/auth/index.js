const mockAuth = {};

mockAuth.onAuthStateChanged = jest.fn();
mockAuth.signInWithCredential = jest.fn();

export default () => mockAuth;
