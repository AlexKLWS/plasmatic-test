import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';

import { scale } from '~/helpers/scale';
import images from '~/assets/images';
import styleSystem from '~/shared/styles';
import GeoPinIcon from '~/assets/icons/GeoPinIcon';
import SearchIcon from '~/assets/icons/SearchIcon';

const HomeScreenHeader = () => {
  return (
    <View style={styles.container}>
      <FastImage style={{ width: scale(64), height: scale(64), borderRadius: 64 }} source={images.portrait1} />
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: scale(8),
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View style={styles.nameAndLocationContainer}>
          <Text style={styleSystem.typography.H3}>{'Hello, Ryan!'}</Text>
          <View style={styles.locationContianer}>
            <GeoPinIcon width={14} height={14} color={styleSystem.colors.secondary.dark} />
            <Text style={[styleSystem.typography.label, { paddingLeft: scale(3) }]}>{'EcoWorld'}</Text>
          </View>
        </View>
        <SearchIcon width={24} height={24} color={styleSystem.colors.secondary.dark} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(32),
    backgroundColor: styleSystem.colors.secondary.white,
    flexDirection: 'row',
    paddingBottom: scale(32),
    paddingTop: scale(32),
  },
  nameAndLocationContainer: {
    paddingLeft: scale(16),
    alignContent: 'center',
    justifyContent: 'center',
  },
  locationContianer: {
    flexDirection: 'row',
    paddingTop: scale(2),
    alignContent: 'center',
  },
});

export default HomeScreenHeader;