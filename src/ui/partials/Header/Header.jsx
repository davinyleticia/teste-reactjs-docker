import React, { useCallback, useContext, useEffect, useState } from 'react';
import Alert from '../../components/Alert/Alert';
import Avatar from '../../components/Avatar/Avatar';
import LogoIco from '../../components/Ico/Logo';
import MenuIco from '../../components/Ico/Menu';
import Notifications from '../../components/Notifications/Notifications';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  ContentLeft,
  ContentRight,
  Info,
  Name,
  Proficiency,
} from './header.styled';
import { contextAPI } from '../../../data/contexts/useApiNotifications';
import { fetchNotifications } from '../../../data/actions/notifications';

function Header() {
  const [api, dispatch] = useContext(contextAPI);

  useEffect(() => {
    fetchNotifications(dispatch);
  }, [fetchNotifications, dispatch]);

  console.log(api)

  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const hanldenShowNotifications = useCallback(() => {
    if (isVisible === true) {
      setIsVisible(false);
    }

    if (isVisible === false) {
      setIsVisible(true);
    }
  }, [isVisible]);

  const HanldenViewsAll = useCallback(() => {
    setIsVisible(false);
    navigate('/notifications');
  }, [navigate]);

  return (
    <React.Fragment>
      <Container>
        <ContentLeft>
          <MenuIco />
          <LogoIco />
        </ContentLeft>
        <ContentRight>
          <Alert isAlert={true} ShowNotifications={hanldenShowNotifications} />
          <Avatar imgUrl="https://daviny.dev/images/logo.png" label="Avatar" />
          <Info>
            <Name>João da Silva</Name>
            <Proficiency>Professor</Proficiency>
          </Info>
        </ContentRight>
      </Container>
      {isVisible && (
        <Notifications
          setIsVisible={setIsVisible}
          HanldenViewsAll={HanldenViewsAll}
          dataNotifications={api.notifications.posts}
        />
      )}
    </React.Fragment>
  );
}

export default Header;
