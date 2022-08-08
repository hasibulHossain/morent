import React from 'react';
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";


function Login() {
  interface Values {
    email: string;
    password: string;
  }

  // Initial form value
  const initialValues: Values = {
    email: "",
    password: ""
  };

  // Form validation schema
  const validationSchema = yup.object().shape({
    email: yup.string()
    .required("Required")
    .test('email', 'Enter a valid email address', value => {
      if(value === undefined || value === null) return false;
  
      const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
      let isValidEmail = emailRegex.test(value.trim());
      
      if(!isValidEmail) return false

      return true
    }),
    password: yup.string()
    .min(8, 'Minimum 8 characters required')
    .required('Required')
    .test('password', 'space not allowed', (value) => {
      if(value === undefined || value === null || /\s/g.test(value)) return false;
      
      return true;
    })
  });

  const onSubmit = (values: Values) => {
    // handle submitted form
    // and redirect to any page after successfully login
  };

  return (
    <Formik
      initialValues={ initialValues }
      onSubmit={ onSubmit }
      validationSchema={ validationSchema }
      validateOnMount >
      {() => {
        return (
            <div className="antialiased bg-gray-200 text-gray-900 font-sans">
              <div className="flex items-center h-screen w-full">
                <div className="w-full bg-white rounded shadow p-8 m-4 md:max-w-sm md:mx-auto">
                  <span className="block w-full text-xl uppercase font-bold mb-4">Login</span>
                  <Form>
                    <div className="mb-4 md:w-full">
                      <label htmlFor="email" className="block text-xs mb-1">Email</label>
                      <Field className="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" id="email" name="email" placeholder="Email" />
                      <ErrorMessage name="email">{msg => <small className="err-mss color-main" >{msg}</small>}</ErrorMessage>
                    </div>
                    <div className="mb-4 md:w-full">
                      <label htmlFor="password" className="block text-xs mb-1">Password</label>
                      <Field className="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" id="password" name="password" placeholder="password" />
                      <ErrorMessage name="password">{msg => <small className="err-mss color-main" >{msg}</small>}</ErrorMessage>
                    </div>
                    <button className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Login</button>

                  </Form>
                  <a className="text-blue-700 text-center text-sm" href="/login">Forgot password?</a>
                </div>
              </div>
            </div>
          );
        }
      }
    </Formik>
  )
}

export default Login;
