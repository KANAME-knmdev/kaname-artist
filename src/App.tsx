import React from "react";

import styled from "@emotion/styled";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MAX_WIDTH } from "./const";
import { Routing } from "./routing";

import Auth from "./containers/Auth";
import Home from "./containers/Home";
import Login from "./containers/Login";

const App: React.FC = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route strict exact path={Routing.login} component={Login} />
          <Auth>
            <Switch>
              <Route strict exact path={Routing.root} component={Home} />
              <Route strict exact path={Routing.home} component={Home} />
            </Switch>
          </Auth>
        </Switch>
      </Router>
    </Container>
  );
};

const Container = styled.div`
  max-width: ${MAX_WIDTH};
  width: 100%;
  height: 100vh;
  margin: auto;
`;

export default App;
