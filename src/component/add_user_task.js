import React from 'react';
import { connect } from "react-redux";
import {Formik, Field} from 'formik';
import {Button} from "antd";

import {MyPagination} from "../pagination/pagination";
import { editButton, getCurrentPage, getIsAuth, getTaskThunkCreator,
getTotalCount, saveButton } from "../store/addTask-reducer";
import SortButton from "./sort_button";
import EditAdmin from "./edit_admin";
import {useAddUsersTasks} from "./hock/useAddUsersTasks";
import FormUserTask from "./form_user_task";

const AddUsersTasks = ({getTaskThunkCreator,changeSortAll,currentPage,totalCount,message,isAuth,getIsAuth,getCurrentPage}) => {

    const {sort,setSort,changeSort,setChangeSort,
        changeSortUsername,setChangeSortUsername,
        changeSortEmail,setChangeSortEmail,
        changeSortStatus,setChangeSortStatus,
        dispatch,handleSubmit} = useAddUsersTasks(getTaskThunkCreator,currentPage,totalCount)

  return <div>
        <h2>ADD  TASKS</h2>

        <FormUserTask handleSubmit={handleSubmit}/>

        {/*<Formik initialValues={{username: '', email: '', text: ''}} onSubmit={handleSubmit}>*/}
        {/*    {({*/}
        {/*          values, errors, touched,*/}
        {/*          handleChange, handleBlur,*/}
        {/*          handleSubmit, isValid, dirty, isSubmitting,onReset,*/}
        {/*      }) => (*/}
        {/*        <form onSubmit={handleSubmit}>*/}

        {/*            <label htmlFor={'username'}>Name</label>*/}
        {/*            <Field required={'username'}*/}
        {/*                   type="text"*/}
        {/*                   onChange={handleChange}*/}
        {/*                   onBlur={handleBlur}*/}
        {/*                   value={values.username}*/}
        {/*                   name="username"*/}
        {/*                   placeholder={'name'}*/}
        {/*            />*/}
        {/*            {touched.name && errors.name && <div className={'error'} id="feedback">{errors.name}</div>}*/}
        {/*            /!*{touched.name && errors.name && <p className={'error'}>{errors.name}</p>}*!/*/}
        {/*            <label htmlFor={'Email'}>Email</label>*/}
        {/*            <Field required={'email'}*/}
        {/*                   type="email"*/}
        {/*                   onChange={handleChange}*/}
        {/*                   onBlur={handleBlur}*/}
        {/*                   value={values.email}*/}
        {/*                   name="email"*/}
        {/*                   placeholder={'email'}*/}
        {/*            />*/}
        {/*            {touched.email && errors.email && <div className={'error'} id="feedback">{errors.email}</div>}*/}
        {/*            <label htmlFor={'Text'}>Text</label>*/}
        {/*            <Field required={'text'}*/}
        {/*                   component={'textarea'}*/}
        {/*                   type="textarea"*/}
        {/*                   onChange={handleChange}*/}
        {/*                   onBlur={handleBlur}*/}
        {/*                   value={values.text}*/}
        {/*                   name="text"*/}
        {/*                   placeholder={'add task'}*/}
        {/*            />*/}
        {/*            {touched.text && errors.text && <div className={'error'} id="feedback">{errors.text}</div>}*/}
        {/*            <div>*/}
        {/*                <button  type="submit">Submit</button>*/}
        {/*            </div>*/}
        {/*        </form>*/}
        {/*    )}*/}
        {/*</Formik>*/}
             <h2>LIST  TASKS</h2>

           <SortButton message={message}
                       setSort={setSort} sort={sort}
                       setChangeSort={setChangeSort} changeSort = {changeSort}
                       setChangeSortUsername={setChangeSortUsername} changeSortUsername={changeSortUsername}
                       changeSortEmail={changeSortEmail} setChangeSortEmail={setChangeSortEmail}
                       changeSortStatus={changeSortStatus} setChangeSortStatus={setChangeSortStatus}
           />

        {
            message?.length &&
            message.map((el,i) =>   <div className={'task'}
                // style={{border: '1px solid black', padding: 10,
                // marginLeft: 0, marginTop:10, marginBottom:10, minWidth: 200}}
                key={el.id}>
                { !isAuth
               ?
                    <>
                    <div><b>Name:</b>{el.username} </div>
                    <div><b>Email: </b>{el.email} </div>
                    <div><b>Text: </b>{el.text}</div>
                    <div><b>Status:</b>{el.status}</div>
                    </>
               :
                    <>

                        {!message[i].editMode
                            ?
                                <div id={i}>
                                    <div><b>Name:</b>{el.username} </div>
                                    <div><b>Email: </b>{el.email} </div>
                                    <div><b>Text: </b>{el.text}</div>
                                    <div><b>Status:</b>{el.status}</div>
                                    <Button type={'primary'}
                                       onClick={() => dispatch(editButton(i))}>Edit</Button>
                                </div>
                            :
                                <EditAdmin id={i} username={el.username} index={el.id}
                                           getTaskThunkCreator={getTaskThunkCreator}
                                           email={el.email} status={el.status}
                                           text={el.text} message={message}
                                           getIsAuth={getIsAuth} currentPage={currentPage}
                                           totalCount={totalCount}
                                           sort={sort} changeSortAll={changeSortAll}/>
                        }

                       </>
                }
            </div>)
        }

        <MyPagination currentPage={currentPage}
                      totalCount={totalCount}
                      getCurrentPage={getCurrentPage}/>
    </div>
}

const mapStateToProps = (state) => {

    return {
        message: state.task.message,
        // users: state.task.users,
        currentPage: state.task.currentPage,
        totalCount: state.task.totalCount,
        isAuth: state.task.isAuth,
        editMode: state.task.editMode,
    }
}

export default connect(mapStateToProps, {getTaskThunkCreator,
    getCurrentPage,getTotalCount,getIsAuth,editButton,saveButton
})(AddUsersTasks);
