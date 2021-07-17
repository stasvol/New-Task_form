// import React from "react";
// import { Layout, Menu, Breadcrumb } from 'antd';
// import {BrowserRouter, NavLink} from "react-router-dom"
// import Basic from "./tasks";
// import TasksUsers from "./tasks";
// const { Header, Content, Footer } = Layout;
//
// const HeaderTask =(props) => {
//
//    return <Layout>
//         <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
//             <div className="logo"/>
//             <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
//                 <Menu.Item key="1"><NavLink to={'/HeaderTask'} >Add task</NavLink></Menu.Item>
//                 <Menu.Item key="2"><NavLink to={'/QQQ'} >QQQ</NavLink></Menu.Item>
//                 <Menu.Item key="3"><NavLink to={'/ASD'} >ASD</NavLink></Menu.Item>
//
//             </Menu>
//         </Header>
//         <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
//             {/*<Breadcrumb style={{margin: '16px 0'}}>*/}
//             {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
//             {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
//             {/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
//             {/*</Breadcrumb>*/}
//             <div className="site-layout-background" style={{padding: 24, minHeight: 380}}>
//                 Content
//                 <TasksUsers />
//             </div>
//         </Content>
//         <Footer style={{textAlign: 'center'}}>App ©2021 Created by Artur</Footer>
//     </Layout>
//
//
// }
// export default HeaderTask

import React, {useEffect, useState} from 'react';
import {Formik, Field} from 'formik';
import {MyPagination} from "../pagination/pagination";
import AdminEdit from "./admin-edit";
import {connect, useSelector} from "react-redux";
import {addTaskThunk, getTaskThunkCreator} from "../store/addTask-reducer";


const AddUsersTasks = (props) => {


    const users = useSelector(state => state.task.users)

    useEffect(() => {
        props.getTaskThunkCreator()
    }, [])

    const handleClick = () => {
        console.log(JSON.stringify(props.users.message))

    }

    return <div>
        <h1>Add task</h1>
        <Formik
            initialValues={{username: '', email: '', text: ''}}


            onSubmit={(values, actions) => {

                const users = {
                    // id: Math.random()*10,
                    username: values.username,
                    email: values.email,
                    text: values.text,
                }
                props.addTaskThunk(users)
                actions.setSubmitting(false);
                console.log("USER ", users)
                // setTimeout(() => {
                //     alert(JSON.stringify(values, null, 2));
                //     actions.setSubmitting(false);
                // }, 1000);
            }}

        >
            {({
                  values, errors, touched,
                  handleChange, handleBlur,
                  handleSubmit, isValid, dirty, isSubmitting, ...props
              }) => (
                <form onSubmit={handleSubmit}>

                    <label htmlFor={'username'}>Name</label>
                    <Field required={'username'}
                           type="text"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.username}
                           name="username"
                           placeholder={'name'}
                    />
                    {touched.name && errors.name && <div className={'error'} id="feedback">{errors.name}</div>}
                    {/*{touched.name && errors.name && <p className={'error'}>{errors.name}</p>}*/}
                    <label htmlFor={'Email'}>Email</label>
                    <Field required={'email'}
                           type="email"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.email}
                           name="email"
                           placeholder={'email'}
                    />
                    {touched.email && errors.email && <div className={'error'} id="feedback">{errors.email}</div>}
                    <label htmlFor={'Text'}>Text</label>
                    <Field required={'text'}
                           component={'textarea'}
                           type="textarea"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.text}
                           name="text"
                           placeholder={'add task'}
                    />
                    {touched.text && errors.text && <div className={'error'} id="feedback">{errors.text}</div>}
                    <div>
                        <button onClick={handleClick} type="submit">Submit</button>
                    </div>
                </form>
            )}
        </Formik>

        {
            props.message?.tasks?.length &&
            props.message.tasks.map(el => <div
                style={{border: '1px solid black', padding: 10, margin: 10, maxWidth: 250}}
                key={el.id}>
                <div><b>Name:</b>{el.username} </div>
                <div><b>Email: </b>{el.email} </div>
                <div><b>Text: </b>{el.text}</div>
                <div><b>Status:</b> {el.status}</div>
                {/*<img style={{marginLeft:50}} width={100} src={el.image_path} alt={'image'}/>*/}
            </div>)
        }
        {/*{props.users?.message &&*/}

        {/*Object.keys(props.users.message).map(el => <div*/}
        {/*    style={{border: '1px solid black', padding: 10, margin: 10, maxWidth: 250}}*/}
        {/*    key={el.id}>*/}
        {/*    <div><b>Name:</b>{el.username} </div>*/}
        {/*    <div><b>Email: </b>{el.email} </div>*/}
        {/*    <div><b>Text: </b>{el.text}</div>*/}
        {/*    <div><b>Status:</b> {el.status}</div>*/}

        {/*    /!*<img style={{marginLeft:50}} width={100} src={el.image_path} alt={'image'}/>*!/*/}
        {/*</div>) &&*/}
        {/*console.log('MAP  ', props.users)*/}
        {/*}*/}
        {/*{props.users.message && Object.keys(props.users.message)*/}
        {/*     && Object.values(props.users.message)*/}
        {/*}*/}
        {/*{props.users.message &&*/}
        {/*Object.getOwnPropertyNames(props.users.message).forEach(function (val, idx, array) {*/}
        {/*    console.log(val + ':' + props.users.message[val])*/}
        {/*    console.log(props.users)*/}
        {/*})*/}
        {/*}*/}
        {users.message && Object.entries(users.message)
            .map(value=> {
               return  <div> {value} </div>
            })
        }
        {/*{ props.users.message &&*/}
        {/*    Array.from(props.users.message, el=> el)*/}
        {/*}*/}


    </div>

}

const mapStateToProps = (state) => {
    debugger
    console.log('1  ', state.task.message)
    console.log('2  ', state.task.users)

    return {
        message: state.task.message,
        users: state.task.users
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


export default connect(mapStateToProps, {getTaskThunkCreator, addTaskThunk})(AddUsersTasks);
