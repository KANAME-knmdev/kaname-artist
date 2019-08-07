import React, { useState, useEffect } from "react";

import Home from "../../components/Organisms/HomePage";
import DB from "../../firebase/firestore";
import { auth } from "../../firebase/auth";

const HomeContainer: React.FC = () => {
  const [lists, setLists] = useState<any>([]);
  const [isFetch, setFetch] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      const snapshot = await DB.collection("artists").get();
      let fetchLists = [] as any[];
      snapshot.forEach(doc => {
        fetchLists.push(doc.data());
      });
      console.log(fetchLists);
      setLists(fetchLists);
      setFetch(false);
    })();
  }, [isFetch]);
  const update = async (data: any) => {
    const user = auth.currentUser;
    if (!user) {
      auth.signOut();
      return;
    }
    try {
      await DB.collection("artists")
        .doc(user.uid)
        .set({
          ...data,
          uid: user.uid
        });
    } catch (error) {
      console.error(error);
      return new Error("failure");
    }
    setFetch(true);
    return "OK";
  };
  return <Home lists={lists} update={update} />;
};

export default HomeContainer;
