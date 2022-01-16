import { IconButton, TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
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
  const hasError = formState.touched[name] && errors[name];

  //
  const [showPassword, setShowPassword] = useState(false);
  //   console.log("hasError", hasError);
  //   console.log(errors[name], formState.touched[name]);
  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };
  return (
    <div>
      <FormControl variant="outlined" margin="normal" fullWidth>
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
        />
      </FormControl>
    </div>
  );
}

export default PasswordField;
