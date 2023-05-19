import React from 'react';
import { ModalContextProvider } from './data/contexts/useModal';
import { ModalExitMessagesProvider } from './data/contexts/useModalExitMessages';

import RouterViews from './data/routes/router';

function App() {
  return (
    <ModalContextProvider>
      <ModalExitMessagesProvider>
        <RouterViews />
      </ModalExitMessagesProvider>
    </ModalContextProvider>
  );
}

export default App;
