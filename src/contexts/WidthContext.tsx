import { createContext, useState, useEffect } from "react";

interface WidthContextData {
  width: number;
  isMobile: boolean;
}

interface Props {
  children: React.ReactNode;
}

export const WidthContext = createContext({} as WidthContextData);

export const WidthProvider: React.FC<Props> = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(width <= 1024);

  const updateWidth = () => {
    setWidth(window.innerWidth);
    console.log("atualizou width");
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    width <= 1024 ? setIsMobile(true) : setIsMobile(false);
  }, [width]);

  return (
    <WidthContext.Provider value={{ width: width, isMobile: isMobile }}>
      {children}
    </WidthContext.Provider>
  );
};
