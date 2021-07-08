import { useEffect, useState } from 'react';
import { UserEvent } from '~/types/event';

export const useUserEvents = () => {
  const [userEvents, setUserEvents] = useState<UserEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserEvents = async (): Promise<[UserEvent[] | null, Error | null]> => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          [
            {
              imageURL: 'events2',
              eventName: 'Business Head Meeting',
              time: 'Mon Jul 18, 12:00 pm',
              location: 'EcoWorld, CA',
            },
            {
              imageURL: 'events1',
              eventName: 'Interview',
              time: 'Mon Jul 18, 12:00 pm',
              location: 'EcoWorld, CA',
            },
            {
              imageURL: 'events3',
              eventName: 'Another Important Meeting',
              time: 'Mon Jul 18, 12:00 pm',
              location: 'EcoWorld, CA',
            },
          ],
          null,
        ]);
      }, 1000);
    });
  };

  const handleUserEventsFetch = async () => {
    setIsLoading(true);
    const [events, error] = await fetchUserEvents();
    setIsLoading(false);
    if (events) {
      setUserEvents(events);
    }
  };

  useEffect(() => {
    handleUserEventsFetch();
  }, []);

  return { userEvents, isLoading };
};
