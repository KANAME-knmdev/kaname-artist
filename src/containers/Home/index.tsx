import React, { useState, useEffect } from "react";

import Home from "../../components/Organisms/HomePage";
import DB from "../../firebase/firestore";
import { auth } from "../../firebase/auth";
import { uploadImage } from "../../firebase/storage";

const HomeContainer: React.FC = () => {
  const [lists, setLists] = useState<any>([]);
  const fetchList = async () => {
    const snapshot = await DB.collection("artists").get();
    let fetchLists = [] as any[];
    snapshot.forEach((doc: any) => {
      fetchLists.push(doc.data());
    });
    console.log(fetchLists);
    setLists(fetchLists);
  };

  useEffect(() => {
    fetchList();
  }, []);
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
    fetchList();
    return "OK";
  };
  const handleUpload = (file: File) => {
    const user = auth.currentUser;
    if (!user) return;
    if (user.uid !== "") {
      // TODO: message表示・エラー処理
      uploadImage(file, `images/${user.uid}`);
    }
  };
  return <Home lists={lists} update={update} handleUpload={handleUpload} />;
};

export default HomeContainer;
