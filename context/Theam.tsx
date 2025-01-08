import React, { createContext, ReactNode, useContext, useMemo } from "react";

export const TheamContext = createContext<any>(null);

export const useTheam = () => {
    return useContext(TheamContext);
}

const TheamProvider = ({ children }: { children: ReactNode }) => {
  const thema = useMemo(() => {
    const Theams = {
      primary: "#222831",
      secondary: "#393E46",
      text: "#EEEEEE",
      highLight: "#00ADB5",
    };
    return Theams;
  }, []);

  return (
    <>
      <TheamContext.Provider value={thema}>{children}</TheamContext.Provider>
    </>
  );
};

export default TheamProvider;
