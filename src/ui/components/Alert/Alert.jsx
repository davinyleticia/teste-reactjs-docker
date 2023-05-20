import React from 'react';
import SinoIco from '../Ico/Sino';
import { Container, Signal, SignalTransparent } from './alert.styled';

// import { Container } from './styles';

function Alert({isAlert, ShowNotifications}) {
  return (
    <Container onClick={ShowNotifications}>
        <SinoIco/>
        {!isAlert ? <Signal/> : <SignalTransparent/>}
    </Container>
  );
}

export default Alert;