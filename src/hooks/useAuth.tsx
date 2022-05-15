import * as authApi from '@apis/auth';
import { User } from '@models/user';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface AuthContextType {
  isInitialized: boolean;
  loading: boolean;
  user?: User;
  error?: any;
  login: (data: { email: string; password: string }) => Promise<void>;
  // signUp?
  logout: () => Promise<void>;
}

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [user, setUser] = useState<User>();
  const [error, setError] = useState<any>();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    authApi
      .checkAccessToken()
      .then(usr => {
        setUser(usr);
      })
      .catch(err => {
        console.log(err);
        setError(err);
      })
      .finally(() => setIsInitialized(true));
  }, [error]);

  useEffect(() => {
    if (error) setError(undefined);
  }, [location.pathname]);

  async function login(data: { email: string; password: string }) {
    try {
      setLoading(true);
      const usr = await authApi.login(data);
      setUser(usr);
      navigate(-1);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  /** @todos SignUp */
  // async function signUp() {
  // }

  async function logout() {
    try {
      await authApi.logout();
      setUser(undefined);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  }

  const memoedValue = useMemo<AuthContextType>(
    () => ({
      isInitialized,
      loading,
      user,
      error,
      login,
      logout,
      // signUp,
    }),
    [user, loading, isInitialized, error],
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
