import { createContext } from 'react';

export type AuthContextType = {
    email: string | null;
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);
