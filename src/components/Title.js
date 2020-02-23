import React from "react";

const Title = ({ title }) => {
  console.log("Rendeing Title");
  return <h2>{title}</h2>;
};

export default React.memo(Title);
