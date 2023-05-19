import React from 'react';
import SinoIco from '../Ico/Sino';
import { Container, Signal } from './alert.styled';

// import { Container } from './styles';

function Alert({isAlert, ShowNotifications}) {
  return (
    <Container onClick={ShowNotifications}>
        <SinoIco/>
        {isAlert ? <Signal/> : null}
    </Container>
  );
}

export default Alert;