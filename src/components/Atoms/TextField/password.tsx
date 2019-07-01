/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import useToggle from "../../../util/useToggle";

import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

type Props = TextFieldProps & {
  name: string;
  maxLength?: number;
};
const PasswordField: React.FC<Props> = ({
  name,
  maxLength = 255,
  ...props
}) => {
  const [isShow, toggle] = useToggle();
  return (
    <TextField
      type={isShow ? "text" : "password"}
      inputProps={{
        name,
        maxLength
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={toggle}>
              {isShow ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        )
      }}
      margin="dense"
      {...props}
    />
  );
};

export default PasswordField;
