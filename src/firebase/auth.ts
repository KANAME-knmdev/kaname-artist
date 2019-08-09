import { useState, useEffect } from "react";

import firebaseApp from "./app";
import firebase from "firebase/app";
import "firebase/auth";

const firebaseAppAuth = firebaseApp.auth();
export const auth = firebaseAppAuth;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ hd: "kanamekey.com" });
provider.addScope("profile");
provider.addScope("email");
export const google = provider;

const useAuth = () => {
  const [user, setUser] = useState<firebase.User | false | null>(null);
  useEffect(() => {
    firebaseAppAuth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
  }, []);
  return user;
};

export { useAuth };

export type Error = firebase.auth.Error;
export type Auth = ReturnType<typeof firebaseApp.auth>;
