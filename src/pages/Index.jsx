import React from 'react';
import NotificationBoard from '../ui/partials/NotificationBoard/NotificationBoard';
import {
  Container,
  DivisionLine,
  Fragment,
  Title,
} from '../ui/styles/home.styled';

function Home() {

  return (
    <React.Fragment>
      <Container>
        <Title>Notificações</Title>
        <DivisionLine />
        <Fragment>
          <NotificationBoard />
        </Fragment>
      </Container>
    </React.Fragment>
  );
}

export default Home;
