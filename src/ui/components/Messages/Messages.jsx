import React from 'react';
import MessagesIco from '../Ico/Messages';
import { Container, ContentInfo, Data, Title } from './messages.styled';

function Messages({ notification, onClickModal }) {
  return (
    <Container>
      <MessagesIco />
      <ContentInfo>
        <Title
          onClick={() =>
            onClickModal({
              isModal: true,
              id: notification.id,
              title: notification.title,
              date: notification.dateString,
              description: notification.body,
            })
          }
        >
          {notification.title}
        </Title>
        <Data
          onClick={() =>
            onClickModal({
              isModal: true,
              id: notification.id,
              title: notification.title,
              date: notification.dateString,
              description: notification.body,
            })
          }
        >
          {notification.dateString}
        </Data>
      </ContentInfo>
    </Container>
  );
}

export default Messages;
