import React from "react";
import styled from "@emotion/styled";

interface Props {
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  justifyContent?:
    | "center"
    | "start"
    | "end"
    | "space-between"
    | "space-around";
  fullWidth?: boolean;
}

const StyledContainer: React.FC<Props> = ({ children, ...other }) => (
  <Container {...other}>{children}</Container>
);

const Container = styled.div<Props>`
  ${({ fullWidth }) => fullWidth && `width: 100%;`}
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "wrap"};
  background-color: transparent;
`;

export default StyledContainer;
