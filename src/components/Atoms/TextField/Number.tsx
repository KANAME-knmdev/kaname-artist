import React from "react";

import TextField, { TextFieldProps } from "@material-ui/core/TextField";

const formatter = new Intl.NumberFormat("ja-JP");

type Props = TextFieldProps & {
  name: string;
  value: number;
  onChange: (num: number) => void;
};

const NumberField: React.FC<Props> = ({ name, value, onChange, ...props }) => {
  return (
    <TextField
      type="tel"
      inputProps={{
        name
      }}
      margin="dense"
      value={formatter.format(value)}
      onChange={(e: any) => {
        const num = e.target.value;
        onChange(parseInt(num.replace(/,/g, "")));
      }}
      {...props}
    />
  );
};

export default NumberField;
