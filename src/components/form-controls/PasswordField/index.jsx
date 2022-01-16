import { IconButton } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { FormHelperText } from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function PasswordField(props) {
  const { name, disabled, form, label } = props;
  const { errors, formState } = form;
  const hasError = !!errors[name];

  //
  const [showPassword, setShowPassword] = useState(false);
  //   console.log("hasError", hasError);
  //   console.log(errors[name], formState.touched[name]);
  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };
  return (
    <FormControl variant="outlined" margin="normal" error={hasError} fullWidth>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Controller
        id={name}
        type={showPassword ? "text" : "password"}
        value={showPassword}
        label={label}
        //
        name={name} // is required
        control={form.control} // is required
        as={OutlinedInput}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              edge="end"
              onClick={toggleShowPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        helperText={errors[name]?.message} // error message co the co hoac k
      />
      <FormHelperText error={hasError}>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
}

export default PasswordField;
