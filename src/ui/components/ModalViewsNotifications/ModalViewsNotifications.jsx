import React, { useContext } from 'react';
import { contextModal } from '../../../data/contexts/useModal';
import MessagesIco from '../Ico/Messages';
import {
    Blackrop,
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

  const [setIsModal] = useContext(contextModal);


  return (
    <Blackrop>
      <Container>
        <Content>
          <Fragment>
            <MessagesIco />
            <ContentInfo>
              <Title>Proz | Comunicado - Alteração de número do whatsapp</Title>
              <Data>31/03/2022 - 19:33</Data>
            </ContentInfo>
            <Close setIsVisible={closeMessages} />
          </Fragment>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Description>
          <DivisionLine />
          <ContentViewsAll>
            <BtnViewsAll onClick={()=>setIsModal(false)}>FECHAR</BtnViewsAll>
          </ContentViewsAll>
        </Content>
      </Container>
    </Blackrop>
  );
}

export default ModalViewsNotifications;
