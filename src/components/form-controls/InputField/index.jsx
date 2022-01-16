import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { name, disabled, form, label } = props;
  const { errors, formState } = form;
  const hasError = errors[name];
  console.log("hasError", hasError);
  console.log(errors[name], formState.touched[name]);
  return (
    <Controller
      name={name} // is required
      control={form.control} // is required
      as={TextField}
      margin="normal"
      variant="outlined"
      label={label}
      disabled={disabled}
      fullWidth
      error={!!hasError}
      helperText={errors[name]?.message} // error message co the co hoac k
    />
  );
}

export default InputField;
