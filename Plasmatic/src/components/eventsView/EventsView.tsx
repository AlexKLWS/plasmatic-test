import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { scale } from '~/helpers/scale';

import styleSystem from '~/shared/styles';
import BigEventItem from '../bigEventItem/BigEventItem';
import SmallEventItem from '../smallEventItem/SmallEventItem';

const EventsView = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.topEventsContainer}>
        <View style={styles.topEventsContainerTextSection}>
          <Text style={styleSystem.typography.H5}>Your Next Events</Text>
          <Text style={styleSystem.typography.labelMedium}>View More</Text>
        </View>
        <FlatList
          nestedScrollEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3]}
          keyExtractor={i => `${i}`}
          renderItem={() => <SmallEventItem />}
          contentContainerStyle={{ flexGrow: 1, paddingHorizontal: scale(16) }}
        />
      </View>
      <View style={[styles.bottomEventsContainer, { marginTop: scale(16) }]}>
        <BigEventItem />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: styleSystem.colors.ui.homeBackground,
    paddingVertical: scale(16),
  },
  topEventsContainer: {
    backgroundColor: styleSystem.colors.secondary.white,
    paddingBottom: scale(24),
  },
  topEventsContainerTextSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: scale(16),
    paddingHorizontal: scale(24),
  },
  bottomEventsContainer: {
    backgroundColor: styleSystem.colors.secondary.white,
    paddingVertical: scale(24),
    paddingHorizontal: scale(16),
  },
});

export default EventsView;
