import React, { useContext, useEffect } from 'react';
import { fetchNotifications } from '../../../data/actions/notifications';
import { contextAPI } from '../../../data/contexts/useApiNotifications';

import NotFoundNotifications from '../../components/NotFoundNotifications/NotFoundNotifications';
import NotificationsCard from '../../components/NotificationsCard/NotificationsCard';
import { Cads } from './Notifications.styled';

function NotificationBoard() {
  const [api, dispatch] = useContext(contextAPI);

  let dataAtual = new Date();
  let mes = String(dataAtual.getMonth() + 1).padStart(2, '0');

  let dataFormatada = '' + mes;
  let data = parseInt(dataFormatada);

  useEffect(() => {
    fetchNotifications(dispatch);
  }, [fetchNotifications, dispatch]);

  console.log(data);

  return (
    <React.Fragment>
      {api?.notifications?.length > 0 ? (
        <Cads>
          {api?.notifications
            .slice()
            .sort((a, b) => new Date(b.mes) - new Date(a.mes))
            .map((elem, index) => (
              <>
                <NotificationsCard
                  key={index}
                  title={elem.title.substring(0, 10)}
                  date={elem.date}
                  description={elem.body}
                  intro={elem.body.substring(0, 70)}
                  id={elem.id}
                  isActive={elem.mes > data ? true : null}
                  dateString={elem.dateString}
                />
              </>
            ))}
        </Cads>
      ) : (
        <NotFoundNotifications />
      )}
    </React.Fragment>
  );
}

export default NotificationBoard;
