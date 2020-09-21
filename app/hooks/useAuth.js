import { useContext } from "react";
import AuthContext from "../contexts/auth";
import authStorage from "../utils/authStorage";
import jwtDecode from "jwt-decode";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  const login = (authToken) => {
    setUser(jwtDecode(authToken));
    authStorage.storeToken(authToken);
  };

  return { user, logout, login };
};

export default useAuth;
