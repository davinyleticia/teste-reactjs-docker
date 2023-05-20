import React, { useCallback, useContext, useEffect } from 'react';
import { deleteNofitication } from '../../../data/actions/notifications';
import { contextAPI } from '../../../data/contexts/useApiNotifications';
import { contextModalExitMessages } from '../../../data/contexts/useModalExitMessages';
import { Blackrop } from '../../styles/home.styled';
import WarnIco from '../Ico/Warn';
import {
  BtnNo,
  BtnYes,
  Container,
  ContentBtn,
  MessagesWarn,
  Title,
} from './ModalExitMessages.styled';

function ModalExitMessages() {
  const [modalExitMessages, handleSetModalExitMessages] = useContext(
    contextModalExitMessages,
  );
  const [api, dispatch] = useContext(contextAPI);

  const handleExitMessages = useCallback(() => {
    deleteNofitication(modalExitMessages.id, dispatch);
    handleSetModalExitMessages({ isModal: false });
  }, [dispatch, deleteNofitication, handleSetModalExitMessages]);

  return (
    <Blackrop>
      <Container>
        <WarnIco />
        <Title>Excluir mensagem</Title>
        <MessagesWarn>Deseja realmente excluir a mensagem?</MessagesWarn>
        <ContentBtn>
          <BtnNo onClick={() => handleSetModalExitMessages({ isModal: false })}>
            Não
          </BtnNo>
          <BtnYes onClick={handleExitMessages}>Sim</BtnYes>
        </ContentBtn>
      </Container>
    </Blackrop>
  );
}

export default ModalExitMessages;
