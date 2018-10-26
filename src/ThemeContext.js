import { createContext } from 'react';

const ThemeContext = createContext({
  theme: 'default',
  changeTheme: () => {},
});

export default ThemeContext;
