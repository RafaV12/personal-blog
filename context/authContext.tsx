import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';

type AuthContextProps = {
  children: React.ReactNode;
};

type User = {
  photo: string | null;
  email: string | null;
};

type Context = {
  user: User | null | undefined;
  isLoading: boolean;
  login: () => void;
};

const AuthContext = createContext<Context | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = async () => {
    setIsLoading(true);
    try {
      await signInWithPopup(auth, provider);
      const user = auth.currentUser;
      setUser({
        photo: user!.photoURL,
        email: user!.email,
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  // Persist user
  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser({ photo: user!.photoURL, email: user!.email });
        setIsLoading(false);
      } else {
        // User is signed out
        setUser(null);
        setIsLoading(false);
      }
    });
  }, []);

  return <AuthContext.Provider value={{ login, user, isLoading }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('AuthContext must be called from within the AuthContextProvider');

  return context;
};
