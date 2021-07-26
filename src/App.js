import logo from './logo.svg';
import './App.css';
import Basic from "./component/tasks-users";
// import HeaderTask, {BasicExample} from "./component/header";
import React, {Suspense, useState} from "react";
import 'antd/dist/antd.css'
import {BrowserRouter, NavLink, Redirect, Route, Switch} from "react-router-dom";
import {Breadcrumb, Layout, Menu} from "antd";
import {QQQ} from "./component/QQQ";
import TasksUsers from "./component/tasks-users";
import BasicExample from "./component/add_user_task"
import AddUsersTasks from "./component/add_user_task";
import {CreateTaskForm} from "./component/create_task_form";
import EntranceAdmin from "./component/entrance_admin";
import {EditAdmin} from "./component/edit_admin";
const {Header, Content, Footer} = Layout;


function App( {...props}) {

    // const handlerProps = (value) => {
    //      console.log(value)
    // }

    // const [isAuth, setIsAuth] = useState( false)

    return (

        <BrowserRouter>

            <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                <div className="logo"/>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"><NavLink to={'/Header'}>Add task</NavLink></Menu.Item>
                    <Menu.Item key="3"><NavLink to={'/Admin'}>Login Admin</NavLink></Menu.Item>

                </Menu>
            </Header>
            <Layout>
                <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>

                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <div className="site-layout-background" style={{padding: 24, minHeight: 380}}>
                                {/*>>>>>>>Content>>>>>>*/}

                                <Route exact path={'/'} render={() => <Redirect to={'/Header'}/>}/>
                                <Route path={'/Header'} render={() => <AddUsersTasks />}/>
                                <Route path={'/Admin'} render={() => <EntranceAdmin  />}/>


                            </div>
                        </Switch>
                    </Suspense>
                    {/*<BasicExample/>*/}
                </Content>
                <Footer style={{textAlign: 'center'}}>App ©2021 Created by Artur</Footer>

            </Layout>
        </BrowserRouter>

    );
}

export default App;
