import React, { useContext } from 'react';
import { contextModal } from '../data/contexts/useModal';
import { contextModalExitMessages } from '../data/contexts/useModalExitMessages';
import ModalExitMessages from '../ui/components/ModalExitMessages/ModalExitMessages';
import ModalViewsNotifications from '../ui/components/ModalViewsNotifications/ModalViewsNotifications';
import Header from '../ui/partials/Header/Header';
import { Toast } from '../ui/styles/globalstyles';

const Layout = ({ component }) => {
  const [modal] = useContext(contextModal);
  const [modalExitMessages] = useContext(contextModalExitMessages);

  return (
    <>

      <Toast
        position="top-center"
        autoClose={900}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      />
      {modal.isModal && <ModalViewsNotifications />}
      {modalExitMessages.isModal && <ModalExitMessages />}
      <Header />
      <main>{component}</main>
    </>
  );
};

export default Layout;
