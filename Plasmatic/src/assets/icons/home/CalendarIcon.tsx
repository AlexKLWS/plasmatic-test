import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function CalendarIcon(props: SvgProps) {
  return (
    <Svg height={24} width={24} viewBox="0 0 490 490" {...props}>
      <Path
        fill={props.color}
        d="M416.1 34.9h-33.3V21.3C382.8 9.9 373.4.5 362 .5s-20.8 9.4-20.8 20.8v13.5H147.7V21.3c0-11.4-9.4-20.8-20.8-20.8s-20.8 9.4-20.8 20.8v13.5H73.9C33.3 34.9 0 68.1 0 108.7v306.9c0 40.6 33.3 73.9 73.9 73.9h341.2c40.6 0 73.9-33.3 74.9-72.8v-308c0-40.6-33.3-73.8-73.9-73.8zm32.3 380.7c0 17.7-14.6 32.3-32.3 32.3H73.9c-17.7 0-32.3-14.6-32.3-32.3V107.7c0-17.7 14.6-32.3 32.3-32.3h32.3v13.5c0 11.4 9.4 20.8 20.8 20.8s20.8-8.3 20.8-19.8V76.5h193.5V89c0 11.4 9.4 20.8 20.8 20.8 10.4 0 19.8-8.3 20.8-19.8V76.5h33.3c17.7 0 32.3 14.6 32.3 32.3v306.8h-.1z"
      />
      <Path
        fill={props.color}
        d="M129 184.7h-25c-11.4 0-20.8 9.4-20.8 20.8s9.4 20.8 20.8 20.8h25c10.4 0 19.8-9.4 20.8-20.8 0-11.5-9.4-20.8-20.8-20.8zM386 184.7h-25c-11.4 0-20.8 9.4-20.8 20.8s9.4 20.8 20.8 20.8h25c10.4 0 19.8-9.4 20.8-20.8 0-11.5-9.4-20.8-20.8-20.8zM257 184.7h-25c-11.4 0-20.8 9.4-20.8 20.8s9.4 20.8 20.8 20.8h25c11.4 0 20.8-9.4 20.8-20.8 0-11.5-9.4-20.8-20.8-20.8zM129 271h-25c-11.4 0-20.8 9.4-20.8 20.8s9.4 20.8 20.8 20.8h25c10.4 0 19.8-8.3 20.8-20.8 0-11.4-9.4-20.8-20.8-20.8zM386 271h-25c-11.4 0-20.8 9.4-20.8 20.8s9.4 20.8 20.8 20.8h25c10.4 0 19.8-8.3 20.8-20.8 0-11.4-9.4-20.8-20.8-20.8zM257 271h-25c-11.4 0-20.8 9.4-20.8 20.8s9.4 20.8 20.8 20.8h25c11.4 0 20.8-8.3 20.8-20.8 0-11.4-9.4-20.8-20.8-20.8zM129 358.4h-25c-11.4 0-20.8 9.4-20.8 20.8S92.6 400 104 400h25c10.4 0 19.8-9.4 20.8-20.8 0-11.4-9.4-20.8-20.8-20.8zM386 358.4h-25c-11.4 0-20.8 9.4-20.8 20.8S349.6 400 361 400h25c10.4 0 19.8-9.4 20.8-20.8 0-11.4-9.4-20.8-20.8-20.8zM257 358.4h-25c-11.4 0-20.8 9.4-20.8 20.8S220.6 400 232 400h25c11.4 0 20.8-9.4 20.8-20.8s-9.4-20.8-20.8-20.8z"
      />
    </Svg>
  );
}

export default CalendarIcon;
