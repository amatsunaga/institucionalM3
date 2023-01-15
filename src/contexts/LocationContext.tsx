import { createContext } from "react";
import { useLocation } from "react-router-dom";

interface LocationContextData {
  path: string;
  location: object;
}

interface Props {
  children: React.ReactNode;
}

export const LocationContext = createContext({} as LocationContextData);

export const LocationProvider: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <LocationContext.Provider value={{ path: path, location: location }}>
      {children}
    </LocationContext.Provider>
  );
};
