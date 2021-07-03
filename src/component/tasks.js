// import React from "react";
// import { Formik } from 'formik';
//
// const Basic = () => (
//     <div>
//         <h1>Anywhere in your app!</h1>
//         <Formik
//             initialValues={{ email: '', password: '' }}
//             validate={values => {
//                 const errors = {};
//                 if (!values.email) {
//                     errors.email = 'Required';
//                 } else if (
//                     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//                 ) {
//                     errors.email = 'Invalid email address';
//                 }
//                 if (!values.password) {
//                     errors.password = 'Required';
//                 } else if (
//                     !/^[A-Z,0-9]/i.test(values.password)
//                 ) {
//                     errors.password = 'Invalid email address';
//                 }
//                 return errors;
//             }}
//
//             onSubmit={(values, { setSubmitting }) => {
//                 setTimeout(() => {
//                     alert(JSON.stringify(values, null, 2));
//                     setSubmitting(false);
//                 }, 400);
//             }}
//         >
//             {({
//                   values,
//                   errors,
//                   touched,
//                   handleChange,
//                   handleBlur,
//                   handleSubmit,
//                   isSubmitting,
//                   /* and other goodies */
//               }) => (
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="email"
//                         name="email"
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.email}
//                     />
//                     {errors.email && touched.email && errors.email}
//                     <input
//                         type="password"
//                         name="password"
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.password}
//                     />
//                     {errors.password && touched.password && errors.password}
//                     <button type="submit" disabled={isSubmitting}>
//                         Submit
//                     </button>
//                 </form>
//             )}
//         </Formik>
//     </div>
// );
//
// export default Basic;
import React, {useEffect, useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';

const Basic = () => {

    const  [data, setData] = useState([])

    useEffect(() => {
        fetch('https://uxcandy.com/~shapoval/test-task-backend/?developer=Name')
            .then((response) => response.json())

            .then(data => dataForm(data))
    },[])

    const dataForm =data=> {
        setData(data)
    }

    console.log(data.message.tasks)
       // <h2> TASK </h2>
  return <div>
    <Formik
        initialValues={{email: '', password: ''}}
        validate={values => {
            const errors = {};
            if (!values.name || values.name.length < 3) {
                errors.name = 'Required - Enter your name';
            }
            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }
            if (!values.password || values.password.length < 3) {
                errors.password = 'Required , min length > 3 symbol';
            } else if (
                !/^[A-Z 0-9]/i.test(values.password)
            ) {
                errors.password = 'Invalid password';
            }
            return errors;
        }}
        onSubmit={(values, {setSubmitting}) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        }}
    >
        {({isSubmitting}) => (
            <Form>
                <label htmlFor={'Name'}>Name</label>
                <Field type="text" name="name" placeholder={'name'}/>
                <ErrorMessage name="name" component="div" className={'error'}/>

                <label htmlFor={'Email'}>Email</label>
                <Field type="email" name="email" placeholder={'email'}/>
                <ErrorMessage name="email" component="div" className={'error'}/>

                {/*<label htmlFor={'Password'}>Password</label>*/}
                {/*<Field type="password" name="password" placeholder={'password'}/>*/}
                {/*<ErrorMessage name="password" component="div" className={'error'}/>*/}

                <label htmlFor={'Task'}>Task</label>
                <Field type="textarea" component={'textarea'} name="textarea" placeholder={'task'}/>
                <div>
                    <button type="submit" disabled={isSubmitting}>Submit</button>
                </div>

            </Form>

        )}
    </Formik>
      { data && data.message.tasks.length &&
      data.message.tasks.map(el=> <li key={el.id}>Name:{el.username} <br/>Email: {el.email}<br/>Text: {el.text}<br/>Status: {el.status}<br/> <img src={el.image_path}/></li>)
      }
  </div>

}

export default Basic;
