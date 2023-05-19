import React, { useContext } from 'react';
import { contextModal } from '../data/contexts/useModal';
import ModalViewsNotifications from '../ui/components/ModalViewsNotifications/ModalViewsNotifications';
import Header from '../ui/partials/Header/Header';

const Layout = ({ component }) => {
  const [isModal] = useContext(contextModal);

  return (
    <>
      {isModal && <ModalViewsNotifications />}
      <Header />
      {}
      <main>{component}</main>
    </>
  );
};

export default Layout;
