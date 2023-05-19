import React from 'react';
import SinoALertIco from '../Ico/SinoAlert';
import { Container, Text } from './NotFoundNotifications.styled';

function NotFoundNotifications() {
  return (
    <Container>
      <SinoALertIco />
      <Text>Você não possui notificações recentes.</Text>
    </Container>
  );
}

export default NotFoundNotifications;
