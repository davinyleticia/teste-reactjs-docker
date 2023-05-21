import React, { useContext, useEffect, useState } from 'react';
import { fetchNotifications } from '../../../data/actions/notifications';
import { contextAPI } from '../../../data/contexts/useApiNotifications';

import NotFoundNotifications from '../../components/NotFoundNotifications/NotFoundNotifications';
import NotificationsCard from '../../components/NotificationsCard/NotificationsCard';
import Pagination from '../../components/Pagination/Pagination';
import { Cads } from './Notifications.styled';

function NotificationBoard() {
  const [api, dispatch] = useContext(contextAPI);
  const [currentPage, setCurrentPage] = useState(1);

  let dataAtual = new Date();
  let mes = String(dataAtual.getMonth() + 1).padStart(2, '0');

  let dataFormatada = '' + mes;
  let data = parseInt(dataFormatada);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(
    api.notifications.slice().sort((a, b) => new Date(b.mes) - new Date(a.mes))
      .length / itemsPerPage,
  );
  const handleClick = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = api.notifications
    .slice()
    .sort((a, b) => new Date(b.mes) - new Date(a.mes))
    .slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    fetchNotifications(dispatch);
  }, [dispatch]);

  return (
    <React.Fragment>
      {api?.notifications?.length > 0 ? (
        <React.Fragment>
          <Cads>
            {currentItems.map((elem, key) => (
              <NotificationsCard
                key={key}
                title={elem.title.substring(0, 10)}
                date={elem.date}
                description={elem.body}
                intro={elem.body.substring(0, 70)}
                id={elem.id}
                isActive={elem.mes > data ? true : null}
                dateString={elem.dateString}
              />
            ))}
          </Cads>
          <Pagination
            totalPages={totalPages}
            handleClick={handleClick}
            currentPage={currentPage}
          />
        </React.Fragment>
      ) : (
        <NotFoundNotifications />
      )}
    </React.Fragment>
  );
}

export default NotificationBoard;
