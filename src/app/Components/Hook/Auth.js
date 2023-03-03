import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../../../firebaseconfig";

function Auth() {
  const [currentuser, setcurrentuser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setcurrentuser(user);
      } else {
        setcurrentuser(null);
      }
    });
  });
  return { currentuser };
}

export default Auth;
