import { createContext, useState, useContext, useEffect } from 'react';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

 
  const signup = async (email, password) => {
    setUser({ email, rol: 'user', uid: '12345' });
  };

  const login = async (email, password) => {
    // Tiene que ser admin@loquesea !!
    const rolAsignado = email.includes('admin') ? 'admin' : 'user';
    setUser({ email, rol: rolAsignado, uid: '12345' });
  };

  const logout = async () => {
    setUser(null);
  };

  const value = { user, loading, signup, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};