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
import {addTaskThunk, addUserTask, getTask, getTaskThunkCreator} from "../store/addTask-reducer";
import {MyPagination} from "../pagination/pagination";
import AdminEdit from "./admin-edit";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";



const TasksUsers = (props) => {

    // const  [data, setData] = useState([])
    //
    //
    // useEffect(() => {
    //     fetch('https://uxcandy.com/~shapoval/test-task-backend/?developer=Name')
    //         .then((response) => response.json())
    //
    //         .then(data => dataFormTask(data))
    // },[])
    //
    // const dataFormTask =data=> {
    //     setData(data)
    // }
    useEffect(()=>{
        props.getTaskThunkCreator()
    },[])

    const submit = (values, {setSubmitting}) => {

         const users ={
             id: values.name-values.email,
             name:values.name,
             email:values.email,
             text:values.text,
         }
         props.addTaskThunk(users)
         setSubmitting(false);
        console.log(users)
    }

    // const onHandlerClick = (values) => {
    //   debugger
    //     props.addTaskThunk(values)
    //      alert('AAAAAAA')
    // }

  return <div>
    <Formik
        // enableReinitialize={true}
        initialValues={{ name: '', email: '',text:'',id:'', password: ''}}
        // validateOnBlur={}
        // validateOnBlur validate={values => {
        //
        //     const errors = {};
        //     if (!values.name || values.name.length < 3) {
        //         errors.name = 'Required, Enter your name-min length > 3 symbol';
        //     } else if(
        //         !/^[A-Z]/i.test(values.name)
        //     ) {
        //     } if (!values.email) {
        //         errors.email = 'Required, Enter your email';
        //     } else if (
        //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //     ) {
        //         errors.email = 'Invalid email address';
        //     }
        //     if (!values.text ) {
        //         errors.text = 'Required, Add text !';
        //     } else if (
        //         !/^[A-Z 0-9]/i.test(values.text)
        //     ) {
        //         errors.text = 'Invalid text';
        //     }
        //     if (!values.password || values.password.length < 3) {
        //         errors.password = 'Required, min length > 3 symbol';
        //     } else if (
        //         !/^[A-Z 0-9]/i.test(values.password)
        //     ) {
        //         errors.password = 'Invalid password';
        //     }
        //
        //     return errors;
        // }}

         onSubmit={submit}
        // onSubmit={(values, {setSubmitting}) => {
        //     const users ={
        //         id: values.id,
        //         name:values.name,
        //         email:values.email,
        //         task:values.task
        //     }
        //     // const filter:filterType = {
        //     //     term: values.term,
        //     //     friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        //     // }
        //     props.addTaskThunk(users)
        //     // props.onFilterChange(filter)
        //     setSubmitting(false);
        //     // setTimeout(() => {
        //     //     alert(JSON.stringify(values, null, 2));
        //     //     setSubmitting(false);
        //     // }, 400);
        // }}
    >
        {({ values,errors,touched,
              handleChange,handleBlur,
              handleSubmit,isValid,dirty,isSubmitting}) => (

            <Form onSubmit={props.handleSubmit}>
                <label htmlFor={'name'}>Name</label>
                <Field type="text" name="name" placeholder={'name'}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       values={values.name}/>
                <ErrorMessage name="name" component="div" className={'error'}/>
                {/*{touched.name && errors.name && <p className={'error'}>{errors.name}</p>}*/}
                <label htmlFor={'Email'}>Email</label>
                <Field type="email" name="email" placeholder={'email'}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       values={values.email}/>
                <ErrorMessage name="email" component="div" className={'error'} />

                {/*<label htmlFor={'Password'}>Password</label>*/}
                {/*<Field type="password" name="password" placeholder={'password'}/>*/}
                {/*<ErrorMessage name="password" component="div" className={'error'}/>*/}

                <label htmlFor={'Text'}>Text</label>
                <Field type="textarea" component={'textarea'} name="text" placeholder={'task'}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       values={values.text} />
                <ErrorMessage name="text" component="div" className={'error'} />
                <div>
                    <button type="submit" disabled={!isValid && !dirty && !isSubmitting}>Submit</button>
                </div>

            </Form>

        )}
    </Formik>
      {/*{ props.message?.tasks?.length &&*/}
      {/*props.message.tasks.map(el=> <div style={{display:"flex",  border: '1px solid black',padding: 10,  margin:10, width:400}}*/}
      {/*                                  key={el.id}>Name:{el.username}  <br/> Email: {el.email} <br/>Text: {el.text} <br/>Status: {el.status}*/}
      {/*    <img style={{marginLeft:50}} width={100} src={el.image_path}/></div>)*/}
      {/*}*/}
      <MyPagination/>
      <AdminEdit/>
  </div>

}

const mapStateToProps =(state) => {

    return {
        message:state.addTask.message,
        users:state.addTask.users
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return{
//         getMessage:(data)=>{
//             dispatch(getTask(data))
//         },
//         addUsers:(users)=>{
//             dispatch(addUserTask(users))
//         }
//     }
//
// }

export default connect(mapStateToProps,{getTaskThunkCreator,addTaskThunk})(TasksUsers) ;
