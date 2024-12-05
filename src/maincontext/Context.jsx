import React, { createContext, useState } from "react";

export const Themesofdark = createContext();

function Darktheme({ children }) {
  const [theme, setTheme] = useState('light');

  const updatetheam = (newTheme) => {
    setTheme(newTheme);
  };
  return (
    <Themesofdark.Provider value={{ theme, updatetheam }}>
      {children}
    </Themesofdark.Provider>
  );
}



export default Darktheme;