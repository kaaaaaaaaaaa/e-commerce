import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "components/form-controls/InputField";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm({ onSubmit }) {
  const schema = yup
    .object({
      title: yup
        .string()
        .required("please Enter title")
        .min("5", "title is too short"),
    })
    .required();

  //
  const form = useForm({
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(schema), // no valodation cho minh
  });

  // console.log(form);
  const handleSubmit = (values) => {
    console.log("todo", values);
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };

  return (
    <div>
      hi
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="title" label="Input Todo" form={form} />
      </form>
    </div>
  );
}

export default TodoForm;
