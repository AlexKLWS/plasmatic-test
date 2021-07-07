import 'react-native-gesture-handler/jestSetup';

require('react-native-reanimated/lib/reanimated2/jestUtils').setUpTests();

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
