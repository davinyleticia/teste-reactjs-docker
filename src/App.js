import React from 'react';
import { APIContextProvider } from './data/contexts/useApiNotifications';
import { ModalContextProvider } from './data/contexts/useModal';
import { ModalExitMessagesProvider } from './data/contexts/useModalExitMessages';

import RouterViews from './data/routes/router';

function App() {
  return (
    <APIContextProvider>
      <ModalContextProvider>
        <ModalExitMessagesProvider>
          <RouterViews />
        </ModalExitMessagesProvider>
      </ModalContextProvider>
    </APIContextProvider>
  );
}

export default App;
