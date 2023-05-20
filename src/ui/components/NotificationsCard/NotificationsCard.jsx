import React, { useContext } from 'react';
import { contextModal } from '../../../data/contexts/useModal';
import { contextModalExitMessages } from '../../../data/contexts/useModalExitMessages';
import MessagesIco from '../Ico/Messages';
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
  IcoSvg,
  Title,
} from './Notifications.styled';

function NotificationsCard({
  setIsVisible,
  title,
  date,
  isActive,
  description,
  intro,
  id,
}) {
  const [, handleSetIsModal] = useContext(contextModal);
  const [, handleSetModalExitMessages] = useContext(contextModalExitMessages);

  return (
    <Container active={isActive}>
      <Content>
        <Fragment>
          <IcoSvg>
            <MessagesIco />
          </IcoSvg>
          <ContentInfo>
            <Title>{title}</Title>
            <Data>3{date}</Data>
          </ContentInfo>
          <Close
            setIsVisible={() =>
              handleSetModalExitMessages({ isModal: true, id: id })
            }
          />
        </Fragment>
        <Description>{intro} ...</Description>
        <DivisionLine />
        <ContentViewsAll>
          <BtnViewsAll
            onClick={() =>
              handleSetIsModal({
                isModal: true,
                id: id,
                title: title,
                date: date,
                description: description,
              })
            }
          >
            LER MENSAGEM
          </BtnViewsAll>
        </ContentViewsAll>
      </Content>
    </Container>
  );
}

export default NotificationsCard;
