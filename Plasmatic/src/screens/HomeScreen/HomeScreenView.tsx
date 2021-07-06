import React from 'react';
import { Text, View } from 'react-native';
import CalendarIcon from '~/assets/icons/home/CalendarIcon';
import PeopleIcon from '~/assets/icons/home/PeopleIcon';
import PostsIcon from '~/assets/icons/home/PostsIcon';
import EventsView from '~/components/eventsView/EventsView';

import HomeScreenHeader from '~/components/homeScreenHeader/HomeScreenHeader';
import TabView from '~/shared/components/TabView';

const HomeScreenView = () => {
  const homeViews = [
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home1</Text>
    </View>,
    <EventsView />,
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home3</Text>
    </View>,
  ];

  return (
    <View style={{ flex: 1 }}>
      <HomeScreenHeader />
      <TabView
        defaultTabIndex={1}
        tabsContent={homeViews}
        tabsIds={['Posts', 'Events', 'Connect']}
        tabIcons={[
          (props: any) => <PostsIcon {...props} />,
          (props: any) => <CalendarIcon {...props} />,
          (props: any) => <PeopleIcon {...props} />,
        ]}
      />
    </View>
  );
};

export default HomeScreenView;
