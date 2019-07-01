import React from "react";

import B from "@material-ui/core/Button";

interface Props {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "default";
  onClick?:
    | ((e: React.SyntheticEvent<Element, Event>) => void | Promise<void>)
    | (() => void | Promise<void>);
  disabled?: boolean;
  fullWidth?: boolean;
}
const Button: React.FC<Props> = ({
  children,
  color = "primary",
  onClick,
  disabled = false,
  fullWidth = false
}) => {
  return (
    <B
      color={color}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      {children}
    </B>
  );
};

export default Button;
