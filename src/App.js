import React from 'react';
import { ModalContextProvider } from './data/contexts/useModal';

import RouterViews from './data/routes/router';

function App() {
  return (
    <ModalContextProvider>
      <RouterViews />
    </ModalContextProvider>
  );
}

export default App;
