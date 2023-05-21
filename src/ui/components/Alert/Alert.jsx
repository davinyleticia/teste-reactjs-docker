import React from 'react';
import SinoIco from '../Ico/Sino';
import { Container, Signal, SignalTransparent } from './alert.styled';

function Alert({isAlert, ShowNotifications}) {
  return (
    <Container onClick={ShowNotifications}>
        <SinoIco/>
        {!isAlert ? <Signal/> : <SignalTransparent/>}
    </Container>
  );
}

export default Alert;