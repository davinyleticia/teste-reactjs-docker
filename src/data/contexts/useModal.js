import React, { useCallback, useState } from "react";

export const contextModal = React.createContext()



export const ModalContextProvider = props => {
  const initial = {
    'isModal': false,
    'id': null,
    'title': null,
    'date': null,
    'description': null,
  }
    const [modal, setIsModal] = useState(initial);
  
    const handleSetIsModal = useCallback((value)=> {
      setIsModal(value);
    },[setIsModal]);

    return (
      <contextModal.Provider value={[modal, handleSetIsModal]}>
        {props.children}
      </contextModal.Provider>
    );
  };