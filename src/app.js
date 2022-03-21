import React, { Suspense } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';

// import AddUsersTasks from "./component/add_user_task";
// import EntranceAdmin from "./component/entrance_admin";
import {
  PagesAddUsersTasks,
  PagesEntranceAdmin,
  PagesLoad,
  PagesRedirect,
} from './ pagesPath/pagesPath';

import 'antd/dist/antd.css';
import './app.css';

const { Header, Content, Footer } = Layout;

const App = () => (
  <BrowserRouter>
    <Header className="site-header">
      <Menu defaultActiveKeys={['1']} mode="horizontal" theme="dark">
        <NavLink activeClassName="active" to="/Header">
          Add task
        </NavLink>
        <NavLink activeClassName="admin" to="/Admin">
          Login Admin
        </NavLink>
      </Menu>
    </Header>
    <Layout>
      <Content className="site-layout">
        <Suspense fallback={PagesLoad}>
          <Switch>
            {/* <div className="site-layout-background"> */}
            {/* >>>>>>>Content>>>>>> */}
            <Route exact path="/" render={PagesRedirect} />
            <Route path="/Header" render={PagesAddUsersTasks} />
            <Route path="/Admin" render={PagesEntranceAdmin} />
            {/* </div> */}
          </Switch>
        </Suspense>
      </Content>
      <Footer className="site-footer">App &copy;2021 Created by Artur</Footer>
    </Layout>
  </BrowserRouter>
);

export default App;
