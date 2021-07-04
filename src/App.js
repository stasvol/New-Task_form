import logo from './logo.svg';
import './App.css';
import Basic from "./component/tasks";
import HeaderTask from "./component/header";
import React from "react";
import 'antd/dist/antd.css'
import {BrowserRouter,Route} from "react-router-dom";



function App() {

  return (

      <BrowserRouter>
       {/*<Basic/>*/}
        <Route exact path={'/'} render={() => <HeaderTask/>}/>
        <Route  path={'/HeaderTask'} render={() => <HeaderTask/>}/>
        <Route path={'/QQQQQQQQ'} render={() => <div>QQQQQQQQ</div>}/>
        <Route path={'/ASD'} render={() => <div>ASD</div>}/>
          {/*<HeaderTask/>*/}
        </BrowserRouter>

  );
}

export default App;
