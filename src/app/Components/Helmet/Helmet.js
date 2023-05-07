import React, { useEffect } from "react";

function Helmet(props) {
  useEffect(() => {
    document.title = "Maltimart -" + props.title;
  }, [props]);
  return <div className="w-96">{props.children}</div>;
}

export default Helmet;
