import React from 'react';
import localFont from 'next/font/local';
const Bigola = localFont({ src: '../styles/fonts/Bigola-Display-Regular.ttf' });
const Gotham = localFont({ src: '../styles/fonts/Gotham-Book.otf' });
export const ColombianContext = React.createContext({});

const ColombianContextProvider = ({ children }) => {

  return <ColombianContext.Provider value={{Bigola, Gotham}}>{children}</ColombianContext.Provider>;
};

export default ColombianContextProvider;

