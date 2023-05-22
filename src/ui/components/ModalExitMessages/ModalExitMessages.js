import React, { useCallback, useContext } from 'react';
import useNotifySuccess from '../../../data/hooks/UseNotify';
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

import 'react-toastify/dist/ReactToastify.css';

function ModalExitMessages() {
  const notifySuccess = useNotifySuccess();
  const [, handleSetModalExitMessages] = useContext(
    contextModalExitMessages,
  );
  const [, dispatch] = useContext(contextAPI);

  const handleExitMessages = useCallback(() => {
    notifySuccess('Mensagem excluída', {
      toastClassName: 'custom-toast',
      bodyClassName: 'custom-toast-body',
    });

    deleteNofitication(dispatch);

    handleSetModalExitMessages({ isModal: false });
  }, [dispatch, handleSetModalExitMessages, notifySuccess]);

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
