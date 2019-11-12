import styled from "@emotion/styled";
// material-ui
import C from "@material-ui/core/Card";
import CAA from "@material-ui/core/CardActionArea";
import CardContentArea from "@material-ui/core/CardContent";
import React from "react";

type Props = {
  id?: number;
  onClick?: (v: number) => void;
  isPlaceHolder?: boolean;
};

const Content: React.FC<Props> = ({
  onClick,
  id,
  children,
  isPlaceHolder = false
}) => {
  if (isPlaceHolder) {
    return <></>;
  }
  if (onClick && id) {
    return (
      <>
        <Card>
          <CardActionArea onClick={() => onClick(id)}>
            <CardContentArea>{children}</CardContentArea>
          </CardActionArea>
        </Card>
      </>
    );
  } else {
    return (
      <Card>
        <CardContentArea>{children}</CardContentArea>
      </Card>
    );
  }
};

const Card = styled(C)`
  && {
    padding: 10px;
    flex-direction: column;
    flex: 0 1 100vw;
    min-height: 22.5vh;
    margin: 10px;
    max-width: 400px;
  }
  & .MuiCardContent-root:last-child {
    padding-bottom: 10px;
  }
`;

const CardActionArea = styled(CAA)`
  height: 100%;
`;

const PlaceHolderDiv = styled(Card)`
  && {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const PlaceHolder = styled.div`
  width: 100%;
  height: 100%;
`;

export default Content;

