import React from "react";

import styled from "@emotion/styled";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import useReactRouter from "use-react-router";
import { Routing } from "../../routing";

const Header: React.FC = () => {
  const { history } = useReactRouter();
  const goHome = () => history.push(Routing.home);

  return (
    <Flex>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Flex isCenter={true}>
            <IconButton color="inherit" onClick={goHome}>
              Kaname-Artist
            </IconButton>
          </Flex>
        </Toolbar>
      </AppBar>
    </Flex>
  );
};

const Flex = styled.div<{ isCenter?: boolean }>`
  ${({ isCenter }) => isCenter && "margin: auto;"}
  display: flex;
`;

export default Header;
