import React from "react";
import { Field } from "formik";
import FormikErrorMessage from "../components/FormikErrorMessage";

const FormikField = ({ name, type, label }) => {
  return (
    <Field name={name}>
      {(formikField) => {
        return (
          <>
            <label htmlFor={name} style={{ display: "block",color:"green" }}>
              {label}
            </label>
            <input
              type={type}
              id={name}
              {...formikField.field}
              defaultChecked={formikField.field.value}
              style={{ borderRadius:"5%",margin:"1%" }}
            />
            <FormikErrorMessage name={name} />
          </>
        );
      }}
    </Field>
  );
};

export default FormikField;