import React, { useState, useEffect } from "react";

import Login from "../../components/Organisms/LoginPages";
import { auth, google } from "../../firebase/auth";
import useReactRouter from "use-react-router";
import { Routing } from "../../routing";
import Circular from "../../components/Atoms/Circular";

const LoginContainer: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const { history } = useReactRouter();
  const handleLogin = () => {
    auth.signInWithRedirect(google);
  };
  const handleLogout = () => {
    auth.signOut();
  };
  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await auth.getRedirectResult();
      if (result.credential) {
        history.push(Routing.home);
      } else {
        setLoading(false);
      }
    })();
  }, [history]);

  if (isLoading) return <Circular />;

  return <Login handleLogin={handleLogin} handleLogout={handleLogout} />;
};

export default LoginContainer;
