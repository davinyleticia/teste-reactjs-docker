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
import {
  fetchIsRead,
  fetchNotifications,
} from '../../../data/actions/notifications';

function Header() {
  const [api, dispatch] = useContext(contextAPI);

  useEffect(() => {
    fetchNotifications(dispatch);
  }, [dispatch]);

  const [isVisible, setIsVisible] = useState(false);
  const [dataNotifications, setDataNotifications] = useState([]);
  const [allRead, setAllRead] = useState();

  const navigate = useNavigate();

  const hanldenShowNotifications = useCallback(() => {
    if (isVisible === true) {
      setIsVisible(false);
    }

    if (isVisible === false) {
      setIsVisible(true);
    }
  }, [isVisible]);

  const handleViewsAll = useCallback(() => {
    setIsVisible(false);
    navigate('/notifications');
  }, [navigate]);

  const hanldenIsRead = useCallback(
    (array, bool) => {
      fetchIsRead(dispatch, array, bool);
    },
    [dispatch],
  );

  useEffect(() => {
    setDataNotifications(
      api?.notifications?.filter(elem => elem.isRead === false).slice(0, 6),
    );
  }, [api]);

  useEffect(() => {
    setAllRead(
      api?.notifications?.every(notification => notification.isRead === true),
    );
  }, [api]);
  
  return (
    <React.Fragment>
      <Container>
        <ContentLeft>
          <MenuIco />
          <LogoIco />
        </ContentLeft>
        <ContentRight>
          <Alert
            isAlert={allRead}
            ShowNotifications={hanldenShowNotifications}
          />
          <Avatar imgUrl="./avartar.svg" label="Avatar" />
          <Info>
            <Name>João da Silva</Name>
            <Proficiency>Professor</Proficiency>
          </Info>
        </ContentRight>
      </Container>
      {isVisible && (
        <Notifications
          hanldenIsRead={hanldenIsRead}
          handleViewsAll={handleViewsAll}
          dataNotifications={dataNotifications}
        />
      )}
    </React.Fragment>
  );
}

export default Header;
