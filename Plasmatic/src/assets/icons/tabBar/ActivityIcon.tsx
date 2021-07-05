import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function ActivityIcon(props: SvgProps) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path d="M440.1 362.1c-14-8.6-35.1-21.6-34.8-35.4 2.1-88.3-19-155.6-60.9-194.4-9.6-8.9-20.2-16.2-31.6-21.8 8-10.3 12.7-22.8 12.7-36.3 0-34.8-31.2-63.2-69.6-63.2s-69.6 28.4-69.6 63.2c0 13.5 4.7 26 12.7 36.3-11.4 5.6-22 12.9-31.6 21.8-41.9 38.9-62.9 106.1-60.9 194.4.3 13.8-20.8 26.8-34.8 35.4-13.6 8.4-30.6 18.9-24.6 36.5s14.9 21.7 122.3 22.6c4.9 39.4 40.3 79.8 86.5 79.8s81.5-40.4 86.5-79.8c107.4-.9 116.4-5 122.3-22.6 6-17.6-10.9-28.1-24.6-36.5zM256 51.8c13.6 0 24.6 10 24.6 22.4 0 12.3-11 22.4-24.6 22.4s-24.6-10-24.6-22.4c0-12.3 11-22.4 24.6-22.4zm0 408.4c-19 0-36.3-19.7-40.9-38.7h81.8c-4.6 19-21.9 38.7-40.9 38.7zm-134.7-80.7c16-12.7 30.8-30 30.2-53.6-1.8-76 15.3-134.6 48.1-165 15.8-14.7 34.8-22.4 56.4-23 21.6.6 40.6 8.3 56.4 23 32.8 30.4 49.8 89 48.1 165-.5 23.6 14.2 40.9 30.2 53.6-37.4 1.1-232 1.1-269.4 0z" />
    </Svg>
  );
}

export default ActivityIcon;
