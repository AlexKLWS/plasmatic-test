import React from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { scale } from '~/helpers/scale';
import styleSystem from '~/shared/styles';

const { width: WIDTH } = Dimensions.get('window');

interface Props {
  tabIds: string[];
  currentSelectedTab: string;
  onTabSelect: (selectedTabId: string) => void;
  scrollValue: Animated.Value;
}

const TabSwitcherView: React.FC<Props> = (props: Props) => {
  const textOpacity = (index: number) => {
    return props.scrollValue
      ? props.scrollValue.interpolate({
          inputRange: [WIDTH * (index - 1), WIDTH * index, WIDTH * (index + 1)],
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        })
      : 0.3;
  };

  const lineOpacity = (index: number) => {
    return props.scrollValue
      ? props.scrollValue.interpolate({
          inputRange: [WIDTH * (index - 1), WIDTH * index, WIDTH * (index + 1)],
          outputRange: [0, 1, 0],
          extrapolate: 'clamp',
        })
      : 0;
  };

  return (
    <View style={styles.container}>
      {props.tabIds.map((tabId, index) => {
        return (
          <TouchableOpacity
            style={styles.tabContainer}
            key={tabId}
            onPress={() => {
              props.onTabSelect(tabId);
            }}
            activeOpacity={0.7}>
            <Animated.Text style={[styles.label, { opacity: textOpacity(index) }]}>{tabId}</Animated.Text>
            <Animated.View style={[styles.bottomLine, { opacity: lineOpacity(index) }]} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    height: scale(50 - 8), // calculate to remove shadows on top
    backgroundColor: styleSystem.colors.secondary.white,
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: styleSystem.colors.secondary.white,
  },
  label: {
    ...styleSystem.typography.H5,
    color: styleSystem.colors.primary.blue,
  },
  bottomLine: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: scale(2),
    backgroundColor: styleSystem.colors.primary.blue,
  },
});

export default TabSwitcherView;
