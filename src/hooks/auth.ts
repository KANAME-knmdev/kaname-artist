import { useEffect, useState } from "react";

import { auth } from "../firebase/auth";

const useAuth = () => {
  const [isLoading, setLoading] = useState(true);
  const [isLogin, setLogin] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setLoading(true);
      if (user) {
        setLogin(true);
      } else {
        setLogin(false);
      }
      setLoading(false);
    })();
  }, []);

  return { isLoading, isLogin };
};

export default useAuth;
