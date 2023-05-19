import React from 'react';

import NotFoundNotifications from '../../components/NotFoundNotifications/NotFoundNotifications';
import NotificationsCard from '../../components/NotificationsCard/NotificationsCard';
import { Cads } from './Notifications.styled';

function NotificationBoard({
  arrayCardNotifications = [{ title: 1, data: 1 }, { title: 1, data: 1 }],

}) {

  return (
    <React.Fragment>
      {arrayCardNotifications.length > 0 ? (
        <Cads>
          {arrayCardNotifications.map((elem, index) => (
            <NotificationsCard
              key={index}
              title={elem.title}
              data={elem.data}
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
