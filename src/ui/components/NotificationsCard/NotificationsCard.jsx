import React, {useContext} from 'react';
import MessagesIco from '../Ico/Messages';
import { contextModal } from '../../../data/contexts/useModal';
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


  const [setIsModal] = useContext(contextModal);
  return (
    <Container active={isActive}>
      <Content>
        <Fragment>
          <MessagesIco />
          <ContentInfo>
            <Title>Proz | Comunicado - Alteração de número do whatsapp</Title>
            <Data>31/03/2022 - 19:33</Data>
          </ContentInfo>
          <Close setIsVisible={setIsVisible} />
        </Fragment>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Description>
        <DivisionLine />
        <ContentViewsAll>
          <BtnViewsAll onClick={() => setIsModal(true)}>
            LER MENSAGEM
          </BtnViewsAll>
        </ContentViewsAll>
      </Content>
    </Container>
  );
}

export default NotificationsCard;
