import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import images from '~/assets/images';
import { scale } from '~/helpers/scale';
import styleSystem from '~/shared/styles';

const SmallEventItem = () => {
  return (
    <TouchableOpacity activeOpacity={0.85} style={styles.container}>
      <FastImage style={{ height: scale(120), width: scale(200) }} source={images.events1} />
      <LinearGradient colors={['transparent', styleSystem.colors.ui.darkOverlay]} style={styles.contentContainer}>
        <Text style={[styleSystem.typography.H4, { color: styleSystem.colors.secondary.white }]}>
          Business Head Meeting
        </Text>
        <Text style={[styleSystem.typography.labelSmall, { color: styleSystem.colors.secondary.white, opacity: 0.65 }]}>
          Mon Jul 18, 12:00pm
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(8),
    borderRadius: 16,
    overflow: 'hidden',
  },
  contentContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    padding: scale(16),
    justifyContent: 'flex-end',
  },
});

export default SmallEventItem;
