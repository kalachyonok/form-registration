import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState, createContext, useContext } from "react";
import { auth } from "../../firebase";

export const AuthContext = createContext(null);

export const AuthContextProvider = (props) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  return (
    <AuthContext.Provider value={authUser}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
