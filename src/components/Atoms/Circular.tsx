import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

interface Props {
  color?: "primary" | "secondary" | "inherit";
  size?: number;
}

const Circular: React.FC<Props> = ({ color = "primary", size = 40 }) => (
  <CircularProgress color={color} size={size} />
);

export default Circular;
