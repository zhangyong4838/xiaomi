import React from 'react';


export const ThemeContext = React.createContext({themeColor:'pink'})
export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export const UserContext = React.createContext()
export const UserProvider = ThemeContext.Provider;
export const UserConsumer = ThemeContext.Consumer;