import { useContext } from "react";
import authStorage from "../utils/authStorage";
import jwtDecode from "jwt-decode";
import AuthContext from "../contexts/auth";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  const login = (authToken: string) => {
    setUser(jwtDecode(authToken));
    authStorage.storeToken(authToken);
  };

  return { user, logout, login };
};

export default useAuth;
