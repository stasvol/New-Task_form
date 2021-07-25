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
import Entrance_admin from "./entrance_admin";
import {connect, useDispatch, useSelector} from "react-redux";
import {
    addTaskThunk, editButton,
    getCurrentPage,
    getEditMode,
    getIsAuth,
    getTaskThunkCreator,
    getTotalCount, saveButton
} from "../store/addTask-reducer";
import {SortButton} from "./sort_button";
import {Button} from "antd";
import {ArrowDownOutlined, ArrowUpOutlined} from "@ant-design/icons";
import ButtonGroup from "antd/es/button/button-group";
import {EditAdmin} from "./edit_admin";
import {green} from "@ant-design/colors";



const AddUsersTasks = (props) => {

    const [sort,setSort] = useState('')
    const [changeSort,setChangeSort] = useState(true)
    const [changeSortUsername,setChangeSortUsername] =useState(true)
    const [changeSortEmail,setChangeSortEmail] =useState(true)
    const [changeSortStatus,setChangeSortStatus] =useState(true)
    // const [editMode,setEditMode] =useState(false)
    // const [isAuth, setIsAuth] = useState( false)

    // let changeSortAll = changeSort || changeSortUsername || changeSortEmail || changeSortStatus
   let changeSortAll = changeSort && changeSortUsername && changeSortEmail && changeSortStatus


    const users = useSelector(state => state.task.users)
    const dispatch = useDispatch()

    useEffect(() => {
        props.getTaskThunkCreator(props.currentPage,sort,changeSortAll)
            // ,changeSort,changeSortUsername,changeSortEmail,changeSortStatus)
    }, [props.currentPage,sort,changeSortAll])
        // changeSort,changeSortUsername,changeSortEmail,changeSortStatus])

    useEffect(()=>{

    },[])

    // const handleChange=(e)=>{
    //
    //     setSort(e.target.value)
    //
    // }
    //
    // const handleClick = () => {
    //     // setEditMode(true)
    //     // dispatch(editButton(id))
    //     // dispatch(getEditMode(true))
    // }

    return <div>
        <h2>ADD  TASKS</h2>

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
                        <button  type="submit">Submit</button>
                    </div>
                </form>
            )}
        </Formik>
             <h2>LIST  TASKS</h2>
        {/*<ButtonGroup>*/}
        {/*    <Button  onClick={handleClick}>Sort ID { changeSort ?<ArrowUpOutlined/>:<ArrowDownOutlined />}</Button>*/}
        {/*    <Button  onClick={handleClick}>Sort Username</Button>*/}
        {/*    <Button  onClick={handleClick}>Sort Email </Button>*/}
        {/*    <Button  onClick={handleClick}>Sort Status </Button>*/}

        {/*</ButtonGroup>*/}

           <SortButton message={props.message}
                       setSort={setSort} sort={sort}
                       setChangeSort={setChangeSort} changeSort = {changeSort}
                       setChangeSortUsername={setChangeSortUsername} changeSortUsername={changeSortUsername}
                       changeSortEmail={changeSortEmail} setChangeSortEmail={setChangeSortEmail}
                       changeSortStatus={changeSortStatus} setChangeSortStatus={setChangeSortStatus}
           />

           {/*<select value={sort} onChange={handleChange} onDoubleClick={handleClick} className={ 'select' }>*/}
           {/*    <option value={'id'} >Sort ID</option>*/}
           {/*    <option value={'username'}>Sort USERNAME</option>*/}
           {/*    <option value={'email'} >Sort EMAIL</option>*/}
           {/*    <option value={'status'} >Sort STATUS</option>*/}
           {/*</select>*/}


        {
            props.message?.length &&
            props.message.map((el,i) =>   <div
                style={{border: '1px solid black', padding: 10, marginLeft: 0, marginTop:10, marginBottom:10, minWidth: 200}}
                key={el.id}>
                { !props.isAuth
               ?
                    <>
                    <div><b>Name:</b>{el.username} </div>
                    <div><b>Email: </b>{el.email} </div>
                    <div><b>Text: </b>{el.text}</div>
                    <div><b>Status:</b>{el.status}</div>
                    </>
               :
                    <>

                        {
                            !props.message[i].editMode

                                ?
                                <div id={i}>
                                    <div><b>Name:</b>{el.username} </div>
                                    <div><b>Email: </b>{el.email} </div>
                                    <div><b>Text: </b>{el.text}</div>
                                    <div><b>Status:</b>{el.status}</div>
                                    <Button type={'primary'} onClick={() => dispatch(editButton(i))}>Edit</Button>
                                </div>
                                :
                                <EditAdmin id={i} username={el.username}
                                           email={el.email} status={el.status} text={el.text}
                                           getIsAuth={props.getIsAuth}/>
                        }

                       </>




                }
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
                return  <div key={value.id}> <i>{value.join(':  ')}</i> </div>
            })
        }
        {/*{ props.users.message &&*/}
        {/*    Array.from(props.users.message, el=> el)*/}
        {/*}*/}

        <MyPagination
                      currentPage={props.currentPage}
                      totalCount={props.totalCount}
                      getCurrentPage={props.getCurrentPage}
        />
    </div>

}


const mapStateToProps = (state) => {

    return {
        message: state.task.message,
        users: state.task.users,
        currentPage: state.task.currentPage,
        totalCount: state.task.totalCount,
        isAuth: state.task.isAuth,
        editMode: state.task.editMode,
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
//         editButton:(i)=>{
//             dispatch(editButton(i))
//         }
//     }

export default connect(mapStateToProps, {getTaskThunkCreator, addTaskThunk,
    getCurrentPage,getTotalCount,getIsAuth,editButton,saveButton
})(AddUsersTasks);
