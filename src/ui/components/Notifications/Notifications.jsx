import React from 'react';
import { stringData } from '../../../data/ultils/stringData';
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
  hanldenIsRead,
  HanldenViewsAll,
  dataNotifications,
}) {


  console.log("fff", dataNotifications)

  return (
    <Container>
      {dataNotifications?.length > 0 ? (
        <React.Fragment>
          <Fragment>
            {dataNotifications.map((notification, key) => (
              <Messages key={key} title={notification.title} data={notification.dateString} />
            ))}
            <DivisionLine />
            <ContentViewsAll>
              <BtnViewsAll onClick={HanldenViewsAll}>VER TODOS</BtnViewsAll>
            </ContentViewsAll>
          </Fragment>
          <CloseIco setIsVisible={(bool) =>  hanldenIsRead(dataNotifications, bool)} />
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
