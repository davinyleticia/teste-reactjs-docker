import React from 'react';
import NotificationBoard from '../ui/partials/NotificationBoard/NotificationBoard';
import { Container, DivisionLine, Title } from '../ui/styles/home.styled';

function Home() {
  return (
    <Container>
      <Title>Notificações</Title>
      <DivisionLine/>
      <NotificationBoard />
    </Container>
  );
}

export default Home;
