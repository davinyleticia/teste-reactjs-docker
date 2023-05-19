import React, { useContext } from 'react';
import { contextModalExitMessages } from '../../../data/contexts/useModalExitMessages';
import { Blackrop } from '../../styles/home.styled';
import WarnIco from '../Ico/Warn';
import { BtnNo, BtnYes, Container, ContentBtn, MessagesWarn, Title } from './ModalExitMessages.styled';

function ModalExitMessages() {
    const [modalExitMessages, handleSetModalExitMessages] = useContext(contextModalExitMessages);

  return (<Blackrop>
    <Container>
        <WarnIco/>
        <Title>Excluir mensagem</Title>
        <MessagesWarn>Deseja realmente excluir a mensagem?</MessagesWarn>
        <ContentBtn>
            <BtnNo onClick={()=>handleSetModalExitMessages({isModal: false})}>Não</BtnNo>
            <BtnYes>Sim</BtnYes>
        </ContentBtn>
    </Container>
  </Blackrop>
  );
}

export default ModalExitMessages;