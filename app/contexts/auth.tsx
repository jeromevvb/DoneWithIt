import React from "react";

type User = null | Object;
interface Props {
  user: User;
  setUser: (user: User) => void;
}

const AuthContext = React.createContext<Props>({
  user: null,
  setUser: () => {},
});

export default AuthContext;
