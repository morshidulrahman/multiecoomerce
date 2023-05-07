import React, { useEffect, useState } from "react";
import { db } from "../../../../firebaseconfig";
import { collection, onSnapshot } from "firebase/firestore";
const UseGetdata = (collectionName) => {
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);
  const collectionRef = collection(db, collectionName);
  useEffect(() => {
    const getData = async () => {
      await onSnapshot(collectionRef, (snapshot) => {
        setdata(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setloading(false);
      });
    };
    getData();
  }, []);
  return { data, loading };
};

export default UseGetdata;
