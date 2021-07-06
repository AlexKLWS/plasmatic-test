import React, { useImperativeHandle, useRef, useState } from 'react';
import {
  View,
  Animated,
  Platform,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { scale } from '~/helpers/scale';
import styleSystem from '~/shared/styles';

import TabSwitcherView from './TabSwitcherView';

const { width: WIDTH } = Dimensions.get('window');

interface Props {
  defaultTabIndex?: number;
  containerStyles?: any;
  flatListContainerStyle?: any;
  tabsIds: string[];
  tabsContent: JSX.Element[];
  onTabSwitchCallback?: (newTab: string) => void;
}

const TabView: React.FC<Props> = React.forwardRef(
  (
    { defaultTabIndex = 0, ...props }: Props,
    ref: ((instance: unknown) => void) | null | React.MutableRefObject<unknown>,
  ) => {
    const listRef = useRef<any | null>(null);
    const scrollXValueRef = useRef(new Animated.Value(Platform.OS === 'ios' ? 0 : 0.01));
    const [currentTab, setCurrentTab] = useState(props.tabsIds[defaultTabIndex]);
    const [activeIndex, setActiveIndex] = useState(defaultTabIndex);

    const onTabButtonPress = (tab: string) => {
      if (!listRef.current) {
        return;
      }
      setCurrentTab(tab);
      const screenId = props.tabsIds.findIndex((tabName: string) => tabName === tab);
      setActiveIndex(screenId);
      listRef.current.scrollToIndex({ index: screenId, animated: true });
      if (props.onTabSwitchCallback) {
        props.onTabSwitchCallback(tab);
      }
    };

    const onMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const newIndex = Math.round(event.nativeEvent.contentOffset.x / (WIDTH - 24));
      if (newIndex !== activeIndex) {
        setCurrentTab(props.tabsIds[newIndex]);
        setActiveIndex(newIndex);
        if (props.onTabSwitchCallback) {
          props.onTabSwitchCallback(props.tabsIds[newIndex]);
        }
      }
    };

    const renderItem = ({ item }: any) => {
      return <View style={styles.screenContainer}>{item}</View>;
    };

    const getItemLayout = (_: any, index: number) => {
      return { length: WIDTH, offset: WIDTH * index, index };
    };

    useImperativeHandle(ref, () => ({
      switchToTab: (tab: string) => {
        onTabButtonPress(tab);
      },
    }));

    return (
      <Animated.View style={[styles.listsContainer, props.containerStyles]}>
        <View style={styles.tabsContainer}>
          <View style={styles.hideTopShadow} />
          <TabSwitcherView
            tabIds={props.tabsIds}
            currentSelectedTab={currentTab}
            onTabSelect={onTabButtonPress}
            scrollValue={scrollXValueRef.current}
          />
        </View>
        <Animated.FlatList
          ref={listRef}
          data={props.tabsContent}
          keyExtractor={(_: any, index: number) => `${index}`}
          renderItem={renderItem}
          getItemLayout={getItemLayout}
          initialScrollIndex={defaultTabIndex}
          scrollEventThrottle={10}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollXValueRef.current } } }], {
            useNativeDriver: true,
          })}
          onMomentumScrollEnd={onMomentumScrollEnd}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          style={[styles.flatListContainer, props.flatListContainerStyle]}
          contentContainerStyle={styles.contentContainer}
          pagingEnabled
          horizontal
        />
      </Animated.View>
    );
  },
);

const styles = StyleSheet.create({
  flatListContainer: {
    flexGrow: 1,
    backgroundColor: styleSystem.colors.secondary.light,
  },
  contentContainer: {
    flexGrow: 1,
  },
  screenContainer: {
    width: WIDTH,
  },
  listsContainer: {
    flex: 1,
    overflow: 'visible',
  },
  tabsContainer: {
    backgroundColor: styleSystem.colors.secondary.white,
    zIndex: 2,
    overflow: 'visible',
    position: 'relative',
    marginTop: scale(8),
  },
  // Hack to hide the topshadow of tabs
  hideTopShadow: {
    position: 'absolute',
    zIndex: 9,
    width: '100%',
    height: scale(8), // this need to be the same as elevation
    top: -scale(8),
    backgroundColor: styleSystem.colors.secondary.white,
  },
});

export default TabView;
