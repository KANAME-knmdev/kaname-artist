import React from "react";

import styled from "@emotion/styled";
import LP from "@material-ui/core/LinearProgress";

interface Props {
  color?: "primary" | "secondary";
}

const Linear: React.FC<Props> = ({ color = "primary" }) => {
  return <LinearProgress color={color} />;
};

const LinearProgress = styled(LP)`
  && {
    background-color: transparent;
  }
`;

export default Linear;
