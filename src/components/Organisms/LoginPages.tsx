import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useLogin from "hooks/login";
import React from "react";
import { Button, Card } from "react-rainbow-components";
import { useHistory } from "react-router-dom";
import { Routing } from "routing";

import { auth, google } from "../../firebase/auth";

const LoginPages: React.FC<any> = () => {
  const { isLoading, isLogin } = useLogin();
  const history = useHistory();
  const handleLogin = () => {
    auth.signInWithRedirect(google);
  };
  const iconContainerStyles = {
    width: "2.5rem",
    height: "2.5rem"
  };
  if (isLogin) {
    history.push(Routing.home);
  }
  return (
    <div className="rainbow-m-around_medium">
      <Card
        icon={
          <span
            className="rainbow-background-color_brand rainbow-border-radius_circle rainbow-align-content_center"
            style={iconContainerStyles}
          >
            <FontAwesomeIcon
              icon={faUsers}
              size="lg"
              className="rainbow-color_white"
            />
          </span>
        }
        title="Login"
      >
        <div className="rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column">
          <Button
            variant="neutral"
            className="rainbow-m-around_medium"
            isLoading={isLoading}
            onClick={handleLogin}
          >
            kanamekey.comでログイン
            <FontAwesomeIcon
              icon={faGoogle}
              className="rainbow-m-left_medium"
            />
          </Button>
          <h1 className="rainbow-p-top_large rainbow-font-size-heading_small rainbow-color_dark-1">
            KANAME Artist
          </h1>
        </div>
      </Card>
    </div>
  );
};

export default LoginPages;
