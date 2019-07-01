import React from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../firebase/auth";
import { Routing } from "../../routing";
import Circular from "../../components/Atoms/Circular";

const Auth: React.FC = ({ children }) => {
  const state = useAuth();
  if (process.env.REACT_APP_MOCK) return <>{children}</>;
  // nullの場合は処理中
  if (state === null) return <Circular />;
  if (state) {
    return <>{children}</>;
  } else {
    // ログインしていない場合
    return <Redirect to={Routing.login} />;
  }
};

export default Auth;
