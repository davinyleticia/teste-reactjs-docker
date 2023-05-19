import React from 'react';
import MessagesIco from '../Ico/Messages';
import { Container, ContentInfo, Data, Title } from './messages.styled';


function Messages() {
  return (
    <Container>
      <MessagesIco />
      <ContentInfo>
        <Title>Proz | Comunicado - Alteração de número do whatsapp</Title>
        <Data>31/03/2022 - 19:33</Data>
      </ContentInfo>
    </Container>
  );
}

export default Messages;
