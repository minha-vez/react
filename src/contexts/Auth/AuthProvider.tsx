import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [email, setEmail] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null)
    const api = useApi();

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('authToken');
            if(storageData) {
                const data = await api.validateToken(storageData);
                console.log(`validateToken: ${data.sub}`)
                if(data.sub){
                    setRole(data.roles[0])
                    setEmail(data.sub);
                }
            }
        }
        validateToken();
    }, [api])
    

    const signin = async (email: string, password: string) => {
        try {
            const data = await api.signin(email, password);
            console.log(`signin: ${data.email}, ${data.access_token}`);
            
            if (data.access_token) {
                setEmail(data.email);
                setToken(data.access_token);
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            return false;
        }
    };

    const signout = async () => {
        setEmail(null);
        setToken('');
        setRole(null);
    };

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token)
    }

    return (
        <AuthContext.Provider value={{ email, role, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
};
