import React from 'react';
import MessagesIco from '../Ico/Messages';
import { Container, ContentInfo, Data, Title } from './messages.styled';


function Messages({title, data}) {
  return (
    <Container>
      <MessagesIco />
      <ContentInfo>
        <Title>{title}</Title>
        <Data>{data}</Data>
      </ContentInfo>
    </Container>
  );
}

export default Messages;
