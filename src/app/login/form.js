"use client"
import  {useState} from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email format is incorrect.').required('Email is required.'),
    password: Yup.string().required('Password is required.'),
  });
const LoginForm = () => {
    const [passwordHide, setPasswordHide] = useState(false);
  
    const togglePasswordVisibility = () => {
        console.log('EE')
      setPasswordHide(!passwordHide);
    };
  
    const handleSubmit = (values) => {
      // Handle form submission here
      console.log(values);
    };
    
    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-input">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <div className="form-input-div">
              <Field name="email" type="email" placeholder="Enter your email" />
            </div>
            <ErrorMessage name="email" component="span" className="form-error" />
          </div>
  
          <div className="form-input" id="password-div">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <div className="form-input-div">
              <Field
                name="password"
                type={passwordHide ? 'text' : 'password'}
                placeholder="Enter your password"
              />
              <button
              className="password-eye"
              type="button"
              onClick={togglePasswordVisibility}
              >
                <span >
                  {passwordHide ? (
                    <>
                    <svg fill="none" viewBox="0 0 24 24" aria-hidden="true" tabindex="-1" className="usr-auth-app-emotion-cache-75lkxn"><path fill="#0A0A0A" d="M10.8 12a1.2 1.2 0 1 1 2.4 0 1.2 1.2 0 0 1-2.4 0Z"></path><path fill="#0A0A0A" fill-rule="evenodd" d="M12 7c-1.861 0-3.813.89-5.25 1.837-.731.48-1.371 1.004-1.84 1.49a4.76 4.76 0 0 0-.598.739C4.175 11.284 4 11.618 4 12s.175.716.312.934c.156.247.364.497.598.739.469.486 1.109 1.01 1.84 1.49C8.187 16.11 10.139 17 12 17c1.861 0 3.813-.89 5.25-1.837.731-.48 1.371-1.004 1.84-1.49.234-.242.442-.492.598-.739.137-.218.312-.552.312-.934s-.175-.716-.313-.934a4.757 4.757 0 0 0-.597-.739c-.469-.486-1.109-1.01-1.84-1.49C15.813 7.89 13.861 7 12 7Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clip-rule="evenodd"></path></svg>
                    </>
                  ) : (
                    <svg fill="none" viewBox="0 0 24 24" aria-hidden="true" tabindex="-1" className="usr-auth-app-emotion-cache-75lkxn"><path fill="#0A0A0A" d="M17.09 18.37c.18.17.41.26.64.26v-.01c.23 0 .46-.08.64-.26a.9.9 0 0 0 0-1.27L6.91 5.64a.9.9 0 0 0-1.27 0 .9.9 0 0 0 0 1.27l11.45 11.46ZM20 12c0 .75-.85 1.76-2.07 2.68l-1.3-1.3c.77-.54 1.33-1.07 1.53-1.38-.52-.79-3.51-3.17-6.11-3.2l-1.6-1.6c.54-.13 1.06-.2 1.55-.2 3.3 0 8 3.24 8 5ZM13.55 16.8c-.53.13-1.06.2-1.55.2-3.29 0-8-3.23-8-5 0-.75.85-1.76 2.08-2.67l7.47 7.47Z"></path></svg>
                  )}
                </span>
              </button>
            </div>
            <ErrorMessage name="password" component="span" className="form-error" />
          </div>
                    <br/>
          <div className="forgot-password-div">
            <Link href="/" className="forgot-password">
              Forgot password
            </Link>
          </div>
              <br/>
          <button type="submit" className="form-btn">
            Login
          </button>
        </Form>
      </Formik>
    );
  };
  
  export default LoginForm;
  

  // 'use client'
// import Link from "next/link";
// import React, {useState} from "react";

// const Form = () => {
//     const [passwordHide, setPasswordHide] = useState(true);
//     const togglePasswordVisibility = (e) => {
//         e.preventDefault()
//         setPasswordHide(!passwordHide);
//       };
//     return (
//         <>
//            <form className="" action="">
//                 <div className="form-input">
//                 <label htmlFor="email" className="input-label">Email</label>
//                 <div className="form-input-div">
//                         <input name="email" id="email" type="email" className="" placeholder="Enter your email" />
//                 </div>
//                 <span className="form-error">Email format is incorrect.</span>
//                 </div>
//                 <div className="form-input" id="password-div">
//                 <label htmlFor="password" className="input-label">Password</label>
//                 <div className="form-input-div">
//                         <input name="password" id="password" type={passwordHide ? 'text': 'password'} className="" placeholder="Enter your password" />
//                         <button className="password-eye" onClick={(e)=>{e.preventDefault(); setPasswordHide(!passwordHide)}}>
//                              <span >
//                                 {passwordHide ?(<>
                                
//                         <svg  fill="none" viewBox="0 0 24 24" aria-hidden="true" tabindex="-1" className="usr-auth-app-emotion-cache-75lkxn"><path fill="#0A0A0A" d="M10.8 12a1.2 1.2 0 1 1 2.4 0 1.2 1.2 0 0 1-2.4 0Z"></path><path fill="#0A0A0A" fill-rule="evenodd" d="M12 7c-1.861 0-3.813.89-5.25 1.837-.731.48-1.371 1.004-1.84 1.49a4.76 4.76 0 0 0-.598.739C4.175 11.284 4 11.618 4 12s.175.716.312.934c.156.247.364.497.598.739.469.486 1.109 1.01 1.84 1.49C8.187 16.11 10.139 17 12 17c1.861 0 3.813-.89 5.25-1.837.731-.48 1.371-1.004 1.84-1.49.234-.242.442-.492.598-.739.137-.218.312-.552.312-.934s-.175-.716-.313-.934a4.757 4.757 0 0 0-.597-.739c-.469-.486-1.109-1.01-1.84-1.49C15.813 7.89 13.861 7 12 7Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clip-rule="evenodd"></path></svg></>):

//                         <svg fill="none" viewBox="0 0 24 24" aria-hidden="true" tabindex="-1" className="usr-auth-app-emotion-cache-75lkxn"><path fill="#0A0A0A" d="M17.09 18.37c.18.17.41.26.64.26v-.01c.23 0 .46-.08.64-.26a.9.9 0 0 0 0-1.27L6.91 5.64a.9.9 0 0 0-1.27 0 .9.9 0 0 0 0 1.27l11.45 11.46ZM20 12c0 .75-.85 1.76-2.07 2.68l-1.3-1.3c.77-.54 1.33-1.07 1.53-1.38-.52-.79-3.51-3.17-6.11-3.2l-1.6-1.6c.54-.13 1.06-.2 1.55-.2 3.3 0 8 3.24 8 5ZM13.55 16.8c-.53.13-1.06.2-1.55.2-3.29 0-8-3.23-8-5 0-.75.85-1.76 2.08-2.67l7.47 7.47Z"></path></svg>
//                                 }
//                         </span>
//                         </button>
//                 </div>
//                 <span className="form-error">Password is required.</span>
//                 </div>
//                 <div className="forgot-password-div">
//                 <Link href="/" className="forgot-password">Forgot password</Link>
//                 </div>
//                 <button type='submit' className="form-btn">Login</button>

//                     </form> 
//         </>
//     );
// }

// export default Form;