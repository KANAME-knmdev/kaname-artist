import { useState, useEffect } from "react";

import firebase from "firebase/app";
import "firebase/auth";

import config from "./config";

export const app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(config);

const firebaseAppAuth = app.auth();
export const auth = firebaseAppAuth;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ hd: "kanamekey.com" });
provider.addScope("profile");
provider.addScope("email");
export const google = provider;

const useAuth = () => {
  const [isLogin, setLogin] = useState<boolean | null>(null);
  useEffect(() => {
    firebaseAppAuth.onAuthStateChanged(user => {
      if (user) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    });
  }, []);
  return isLogin;
};

export { useAuth };

export type Error = firebase.auth.Error;
export type Auth = ReturnType<typeof app.auth>;
