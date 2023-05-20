import React, { useContext, useEffect } from 'react';
import { fetchNotifications } from '../../../data/actions/notifications';
import { contextAPI } from '../../../data/contexts/useApiNotifications';

import NotFoundNotifications from '../../components/NotFoundNotifications/NotFoundNotifications';
import NotificationsCard from '../../components/NotificationsCard/NotificationsCard';
import { Cads } from './Notifications.styled';

function NotificationBoard({
  arrayCardNotifications = [
    { title: 1, data: 1 },
    { title: 1, data: 1 },
  ],
}) {
  const [api, dispatch] = useContext(contextAPI);


  useEffect(() => {
    fetchNotifications(dispatch);
  }, [fetchNotifications, dispatch]);

  return (
    <React.Fragment>
      {api.notifications.posts?.length > 0 ? (
        <Cads>
          {api.notifications.posts?.map((elem, index) => (
            <NotificationsCard
              key={index}
              title={elem.title.substring(0, 10)}
              date={'1/03/2022 - 19:33'}
              description={elem.body}
              intro={elem.body.substring(0, 70)}
              id={elem.id}
            />
          ))}
        </Cads>
      ) : (
        <NotFoundNotifications />
      )}
    </React.Fragment>
  );
}

export default NotificationBoard;
