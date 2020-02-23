import React, { useContext } from "react";
import ThirdComp from "./ThirdComp";
import { UserContext, ChannelContext } from "../App";

const SecondComp = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      {user} - {channel}
      <ThirdComp />
    </div>
  );
};

export default SecondComp;
