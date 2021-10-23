import React from "react";
import { Field } from "formik";
import FormikErrorMessage from "../components/FormikErrorMessage";

const SelectField = ({ name, label,value1,value2,Value3}) => {
  return (
    <Field name={name}>
      {(SelectField) => {
        return (
          <>
            <label htmlFor={name} style={{ display: "block",color:"green" }}>
              {label}
            </label>
            <select
              id={name}
              {...SelectField.field}
              style={{ borderRadius:"5%",margin:"1%",padding:"1%" }}
            >
            <option value={value1} label={value1} >
                {value1}
            </option>
            <option value={value2} label={value2} >
                {value2}
            </option>
            <option value={Value3} label={Value3}>
                {Value3}
            </option>
            </select>
            <FormikErrorMessage name={name} />
          </>
        );
      }}
    </Field>
  );
};

export default SelectField;