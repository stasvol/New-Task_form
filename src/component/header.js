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

import React from 'react';
import { Formik } from 'formik';

export const BasicExample = (props) => (
    <div>
        <h1>My Form</h1>
        <Formik
            initialValues={{ name: 'jared' }}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 1000);
            }}
        >
            {props => (
                <form onSubmit={props.handleSubmit}>
                    <input
                        type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.name}
                        name="name"
                    />
                    {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                    <button type="submit">Submit</button>
                </form>
            )}
        </Formik>
    </div>
);