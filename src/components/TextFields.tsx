import React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { Controller } from "react-hook-form";

interface TextFieldsProps {
  name: string;
  control: any;
  error?: any;
  required?: boolean;
  id?: string;
  label?: string;
}

const TextFields: React.FC<TextFieldsProps> = (props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <FormControl
          fullWidth
          className={props.error ? "Text-error-field" : ""}
        >
          <TextField
            required={props.required}
            size="small"
            id={props.id}
            label={props.label}
            variant="outlined"
            {...field}
            error={Boolean(props.error)}
            helperText={props.error ? props.error.message : ""}
          />
        </FormControl>
      )}
    />
  );
};

export default TextFields;
