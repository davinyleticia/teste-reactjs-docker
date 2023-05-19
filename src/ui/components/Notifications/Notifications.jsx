import React from 'react';
import CloseIco from '../Ico/Close';
import Messages from '../Messages/Messages';
import NotMessages from '../NotMessages/NotMessages';
import {
  BtnViewsAll,
  Container,
  ContentViewsAll,
  DivisionLine,
  Fragment,
} from './notifications.styled';

function Notifications({
  setIsVisible,
  HanldenViewsAll,
  dataNotifications = [{}],
}) {
  return (
    <Container>
      {dataNotifications.length > 0 ? (
        <React.Fragment>
          <Fragment>
            {dataNotifications.map((key, notification) => (
              <Messages key={key} title={notification.title} data={notification.data} />
            ))}
            <DivisionLine />
            <ContentViewsAll>
              <BtnViewsAll onClick={HanldenViewsAll}>VER TODOS</BtnViewsAll>
            </ContentViewsAll>
          </Fragment>
          <CloseIco setIsVisible={setIsVisible} />
        </React.Fragment>
      ) : (
        <Fragment>
          <NotMessages />
        </Fragment>
      )}
    </Container>
  );
}

export default Notifications;
