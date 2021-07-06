import logo from './logo.svg';
import './App.css';
import Basic from "./component/tasks";
import HeaderTask from "./component/header";
import React, {Suspense} from "react";
import 'antd/dist/antd.css'
import {BrowserRouter, NavLink, Redirect, Route, Switch} from "react-router-dom";
import {Breadcrumb, Layout, Menu} from "antd";
import {QQQ} from "./component/QQQ";
import Tasks from "./component/tasks";

const {Header, Content, Footer} = Layout;


function App() {

    return (

        <BrowserRouter>

            <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                <div className="logo"/>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"><NavLink to={'/HeaderTask'}>Add task</NavLink></Menu.Item>
                    <Menu.Item key="2"><NavLink to={'/QQQ'}>QQQ</NavLink></Menu.Item>
                    <Menu.Item key="3"><NavLink to={'/ASD'}>ASD</NavLink></Menu.Item>

                </Menu>
            </Header>
            <Layout>
                <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>

                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <div className="site-layout-background" style={{padding: 24, minHeight: 380}}>
                                >>>>>>>Content>>>>>>

                                <Route exact path={'/'} render={() => <Redirect to={'/HeaderTask'}/>}/>
                                <Route path={'/HeaderTask'} render={() => <Tasks/>}/>
                                <Route path={'/QQQ'} render={() => <QQQ/>}/>
                                <Route path={'/ASD'} render={() => <div>ASD</div>}/>
                                {/*<HeaderTask/>*/}
                            </div>
                        </Switch>
                    </Suspense>
                </Content>
                <Footer style={{textAlign: 'center'}}>App ©2021 Created by Artur</Footer>
            </Layout>
        </BrowserRouter>

    );
}

export default App;
