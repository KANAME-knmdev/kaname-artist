import React, { useState, useEffect } from "react";

import Home from "../../components/Organisms/HomePage";
import DB from "../../firebase/firestore";

const HomeContainer: React.FC = () => {
  const [lists, setLists] = useState<any>([]);
  useEffect(() => {
    (async () => {
      const snapshot = await DB.collection("artists").get();
      let fetchLists = [] as any[];
      snapshot.forEach(doc => {
        fetchLists.push(doc.data());
      });
      console.log(fetchLists);
      setLists(fetchLists);
    })();
  }, []);
  return <Home lists={lists} />;
};

export default HomeContainer;
