
import './app.css';
import React, {Suspense} from "react";
import 'antd/dist/antd.css'
import {BrowserRouter, NavLink, Redirect, Route, Switch} from "react-router-dom";
import { Layout, Menu} from "antd";
import AddUsersTasks from "./component/add_user_task";
import EntranceAdmin from "./component/entrance_admin";


const {Header, Content, Footer} = Layout;


function App( ) {

    return (

        <BrowserRouter>

            <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                {/*<div className="logo"/>*/}
                <Menu theme="dark" mode="horizontal" defaultActiveKeys={['1']}>
                    <NavLink  activeClassName={'active'} to={'/Header'}>Add task</NavLink>
                    <NavLink  activeClassName={'admin'} to={'/Admin'}>Login Admin</NavLink>

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
