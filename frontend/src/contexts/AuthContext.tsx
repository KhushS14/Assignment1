import { createContext, useContext, useEffect, useState } from "react";

/* Mock types */
type User = {
  email: string;
};

type Session = {
  user: User;
};

interface AuthContextType {
  user: User | null;
  session: Session | null;
  signUp: (email: string, password: string) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  /* Simulate initial auth check */
  useEffect(() => {
    setLoading(false);
  }, []);

  const signUp = async (email: string, password: string) => {
    // Mock signup (no backend)
    const mockUser = { email };
    const mockSession = { user: mockUser };

    setUser(mockUser);
    setSession(mockSession);

    return { data: mockSession, error: null };
  };

  const signIn = async (email: string, password: string) => {
    // Mock login
    const mockUser = { email };
    const mockSession = { user: mockUser };

    setUser(mockUser);
    setSession(mockSession);

    return { data: mockSession, error: null };
  };

  const signOut = async () => {
    setUser(null);
    setSession(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, session, signUp, signIn, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
