import React, { useState } from "react";

export const contextModal = React.createContext()



export const ModalContextProvider = props => {
    const [isModal, setIsModal] = useState(false);
  
    const handleSetIsModal = value => {
      setIsModal(value);
    };
    
    return (
      <contextModal.Provider value={[isModal, handleSetIsModal]}>
        {props.children}
      </contextModal.Provider>
    );
  };