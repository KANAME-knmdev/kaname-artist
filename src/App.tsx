import Circular from "components/Atoms/Circular";
import Home from "components/Organisms/HomePage";
import Login from "components/Organisms/LoginPages";
import useAuth from "hooks/auth";
import React from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { Routing } from "routing";
import styled from "styled-components";

import { MAX_WIDTH } from "./const";

const Auth: React.FC = ({ children }) => {
  const state = useAuth();
  if (process.env.REACT_APP_MOCK) return <>{children}</>;
  // nullの場合は処理中
  if (state === null) return <Circular />;
  if (state) {
    return <>{children}</>;
  } else {
    // ログインしていない場合
    return <Redirect to={Routing.login} />;
  }
};

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
