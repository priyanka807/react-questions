import React, { useState } from 'react';
import { DarkModeContext } from './context';

const Store = ({children}) => {
  const [darkMode, setDarkMode] = useState(false);

  // Ensure `value` is explicitly passed
  const value = { darkMode, setDarkMode };

  return (
    <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default Store;
