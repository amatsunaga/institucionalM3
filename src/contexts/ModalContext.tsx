import { createContext, useState } from 'react';

interface ModalContextData {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Props {
    children: React.ReactNode;
}

export const ModalContext = createContext({} as ModalContextData);

export const ModalProvider: React.FC<Props> = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ModalContext.Provider value={{isOpen: isOpen, setIsOpen: setIsOpen}}>
            {children}
        </ModalContext.Provider>
    )
}