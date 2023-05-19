import React from 'react';
import MessagesIco from '../Ico/Messages';
import { Container, ContentInfo, Title } from './NotMessages.styled';


function NotMessages() {
  return (
    <Container>
      <MessagesIco />
      <ContentInfo>
        <Title>Não há nenhuma nova notificação</Title>
      </ContentInfo>
    </Container>
  );
}

export default NotMessages;
