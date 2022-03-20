// import React, {useEffect, useState} from 'react';
// import {Formik, Field} from 'formik';
// import {useSelector} from "react-redux";
//
// export const CreateTaskForm =(props)=>{
//       debugger
//     const users = useSelector(state => state.task.users)
//
//     useEffect(() => {
//         props.getTaskThunkCreator()
//     }, [])
//
//     const handleClick = () => {
//         console.log(JSON.stringify(users.message))
//
//     }
//   return  <Formik
//
//         initialValues={{username: '', email: '', text: ''}}
//
//
//         onSubmit={(values, actions) => {
//
//             const users = {
//                 // id: Math.random()*10,
//                 username: values.username,
//                 email: values.email,
//                 text: values.text,
//             }
//
//             props.addTaskThunk(users)
//             actions.setSubmitting(false);
//             console.log("USER ", users)
//             // setTimeout(() => {
//             //     alert(JSON.stringify(values, null, 2));
//             //     actions.setSubmitting(false);
//             // }, 1000);
//         }}
//
//     >
//         {({
//               values, errors, touched,
//               handleChange, handleBlur,
//               handleSubmit, isValid, dirty, isSubmitting, ...props
//           }) => (
//             <form onSubmit={handleSubmit}>
//
//                 <label htmlFor={'username'}>Name</label>
//                 <Field required={'username'}
//                        type="text"
//                        onChange={handleChange}
//                        onBlur={handleBlur}
//                        value={values.username}
//                        name="username"
//                        placeholder={'name'}
//                 />
//                 {touched.name && errors.name &&
//                 <div className={'error'} id="feedback">{errors.name}</div>}
//                 {/*{touched.name && errors.name &&
//                 <p className={'error'}>{errors.name}</p>}*/}
//                 <label htmlFor={'Email'}>Email</label>
//                 <Field required={'email'}
//                        type="email"
//                        onChange={handleChange}
//                        onBlur={handleBlur}
//                        value={values.email}
//                        name="email"
//                        placeholder={'email'}
//                 />
//                 {touched.email && errors.email &&
//                 <div className={'error'} id="feedback">{errors.email}</div>}
//                 <label htmlFor={'Text'}>Text</label>
//                 <Field required={'text'}
//                        component={'textarea'}
//                        type="textarea"
//                        onChange={handleChange}
//                        onBlur={handleBlur}
//                        value={values.text}
//                        name="text"
//                        placeholder={'add task'}
//                 />
//                 {touched.text && errors.text &&
//                 <div className={'error'} id="feedback">{errors.text}</div>}
//                 <div>
//                     <button onClick={handleClick}
//                     type="submit">Submit</button>
//                 </div>
//             </form>
//         )}
//     </Formik>
//
// }
