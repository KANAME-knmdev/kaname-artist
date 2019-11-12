import { useEffect, useState } from "react";

import { auth } from "../firebase/auth";

const useLogin = () => {
  const [isLoading, setLoading] = useState(true);
  const [isLogin, setLogin] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await auth.getRedirectResult();
      if (result.credential) {
        setLoading(false);
        setLogin(true);
      } else {
        setLoading(false);
        setLogin(false);
      }
    })();
  }, []);

  return { isLoading, isLogin };
};

export default useLogin;
