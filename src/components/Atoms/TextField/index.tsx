import React from "react";

import TextField, { TextFieldProps } from "@material-ui/core/TextField";

type Props = TextFieldProps & {
  type: "email" | "text" | "tel";
  name: string;
  maxLength?: number;
};

const Text: React.FC<Props> = ({ type, name, maxLength = 255, ...props }) => {
  return (
    <TextField
      type={type}
      inputProps={{
        name,
        maxLength
      }}
      margin="dense"
      {...props}
    />
  );
};

export default Text;
