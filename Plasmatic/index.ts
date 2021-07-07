/**
 * @format
 */

import 'reflect-metadata';
import { AppRegistry } from 'react-native';
import App from './App';
// @ts-expect-error
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
