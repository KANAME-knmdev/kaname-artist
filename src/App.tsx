import styled from "@emotion/styled";
import Login from "components/Organisms/LoginPages";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { MAX_WIDTH } from "./const";
import Auth from "./containers/Auth";
import Home from "./containers/Home";
import { Routing } from "./routing";

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
