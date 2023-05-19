import React, { useCallback, useState } from "react";

export const contextModalExitMessages = React.createContext()

export const ModalExitMessagesProvider = props => {
  const initial = {
    'isModal': false,
    'id': null,
  }
    const [modalExitMessages, setIsExitMessages] = useState(initial);
  
    const handleSetModalExitMessages = useCallback((value)=> {
      setIsExitMessages(value);
    },[setIsExitMessages]);

    return (
      <contextModalExitMessages.Provider value={[modalExitMessages, handleSetModalExitMessages]}>
        {props.children}
      </contextModalExitMessages.Provider>
    );
  };