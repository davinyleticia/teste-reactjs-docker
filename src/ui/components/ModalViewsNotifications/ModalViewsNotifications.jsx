import React, { useContext } from 'react';
import { contextModal } from '../../../data/contexts/useModal';
import { Blackrop } from '../../styles/home.styled';
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
  Title,
} from './ModalViewsNotifications.styled';

function ModalViewsNotifications({
  title,
  data,
  descriptonsAll,
  closeMessages,
}) {
  const [modal, handleSetIsModal] = useContext(contextModal);

  return (
    <Blackrop>
      <Container>
        <Content>
          <Fragment>
            <MessagesIco />
            <ContentInfo>
              <Title>{modal.title}</Title>
              <Data>{modal.date}</Data>
            </ContentInfo>
            <React.Fragment>
              <Close setIsVisible={handleSetIsModal} />
            </React.Fragment>
          </Fragment>
          <Description>{modal.description}</Description>
          <DivisionLine />
          <ContentViewsAll>
            <BtnViewsAll onClick={() => handleSetIsModal({ isModal: false })}>
              FECHAR
            </BtnViewsAll>
          </ContentViewsAll>
        </Content>
      </Container>
    </Blackrop>
  );
}

export default ModalViewsNotifications;
