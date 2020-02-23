import React from "react";
import { UserContext, ChannelContext } from "../App";
const ThirdComp = () => (
  <div>
    <UserContext.Consumer>
      {user => {
        return (
          <ChannelContext.Consumer>
            {channel => (
              <p>
                {channel} is nickname for {user}
              </p>
            )}
          </ChannelContext.Consumer>
        );
      }}
    </UserContext.Consumer>
  </div>
);

export default ThirdComp;
