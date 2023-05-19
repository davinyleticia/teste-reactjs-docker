import React, { useContext } from 'react';
import { contextModal } from '../../../data/contexts/useModal';
import { contextModalExitMessages } from '../../../data/contexts/useModalExitMessages';
import MessagesIco from '../Ico/Messages';
import ModalViewsNotifications from '../ModalViewsNotifications/ModalViewsNotifications';
import {
  BtnViewsAll,
  Close,
  Container,
  Content,
  ContentInfo,
  ContentViewsAll,
  Data,
  Description,
  DivisionLine,
  Fragment,
  Title,
} from './Notifications.styled';

function NotificationsCard({ setIsVisible, title, data, isActive }) {
  const [modal, handleSetIsModal] = useContext(contextModal);
  const [modalExitMessages, handleSetModalExitMessages] = useContext(
    contextModalExitMessages,
  );

  return (
    <Container active={isActive}>
      <Content>
        <Fragment>
          <MessagesIco />
          <ContentInfo>
            <Title>Proz | Comunicado - Alteração de número do whatsapp</Title>
            <Data>31/03/2022 - 19:33</Data>
          </ContentInfo>
          <Close
            setIsVisible={() => handleSetModalExitMessages({ isModal: true, id: 1 })}
          />
        </Fragment>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Description>
        <DivisionLine />
        <ContentViewsAll>
          <BtnViewsAll
            onClick={() => handleSetIsModal({ isModal: true, id: 1 })}
          >
            LER MENSAGEM
          </BtnViewsAll>
        </ContentViewsAll>
      </Content>
    </Container>
  );
}

export default NotificationsCard;
