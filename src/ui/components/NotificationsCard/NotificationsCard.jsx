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
  dateString,
  title,
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
            <Data>{dateString}</Data>
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
                date: dateString,
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
