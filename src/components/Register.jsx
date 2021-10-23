import React from "react";
import { Formik, Form, FieldArray  } from "formik";
import * as yup from "yup"
import  FormikField  from "../components/FormikField";
import SelectField from "./SelectField";
import HobbiesList from "./ArrayField"

const RegisterForm = () => {
    const initialValues = {
        email: "",
        password: "",
        username: "",
        confirmPassword: "",
        active: false,
        gender: "",
        hobbies: [] 
    };
    const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));
    const validationSchema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
        username: yup.string().required(),
        confirmPassword: yup.string().required().oneOf([yup.ref('password'), null], 'Passwords must match'),
        active: yup.string().required(),
        gender: yup.string().required(),
    });
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {(formik) => {
                return (
                    <Form>
                        <div style={{ padding: 20 }}>
                        <FormikField label=" User Name:" name="username" type="text" />
                        <FormikField label="Email:" name="email" type="email" />
                        <FormikField label="Password:"name="password"type="password"/>
                        <FormikField label=" Confirm Password:" name="confirmPassword" type="password" />
                        <FormikField label="Active:" name="active"  type="checkbox" />
                        <SelectField label="gender:" name="gender" value1="select gender please " value2="Male" Value3="Female"/>
                        <HobbiesList name="hobbies" />
                        
                        <button style={{ display: "block" ,marginLeft:"48%",color:"green",marginTop:"2%"}}>submit</button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    );
};
export default RegisterForm;