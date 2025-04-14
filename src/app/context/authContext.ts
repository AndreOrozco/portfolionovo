import  { createContext } from 'react';

export const AuthContext = createContext<any>(

    {
        isOpen: false,
        toggle: () => {},
      }
);

