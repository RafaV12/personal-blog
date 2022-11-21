import React, { createContext, useContext, useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';

type AuthContextProps = {
  children: React.ReactNode;
};

type Context = {
  user: string | null | undefined;
  login: () => void;
};

const AuthContext = createContext<Context | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const googleAuth = new GoogleAuthProvider();
  const [user, setUser] = useState<string | null | undefined>(undefined);

  const login = async () => {
    try {
      await signInWithPopup(auth, googleAuth);
      const user = auth.currentUser;
      setUser(user?.photoURL);
    } catch (error) {
      console.log(error);
    }
  };

  return <AuthContext.Provider value={{ login, user }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('AuthContext must be called from within the AuthContextProvider');

  return context;
};
