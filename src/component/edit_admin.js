import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Button} from "antd";
import {red, volcano, gold, yellow, lime, green, cyan, blue, geekblue, purple, magenta, grey} from '@ant-design/colors';
import {generate, presetPalettes} from '@ant-design/colors';
import {Field, Form, Formik} from 'formik';
import md5 from "md5";
import $ from 'jquery';

import { saveButton} from "../store/addTask-reducer";
import {useEditAdmin} from "../hock/useEditAdmin";

const EditAdmin = ({text, status,email,username,
                       sort,changeSortAll,
                       currentPage,totalCount,id,index,
                       getTaskThunkCreator}) => {

    const { editStatus, editText, handleChangeText, handleChangeStatus, handleClick } = useEditAdmin(
        getTaskThunkCreator,currentPage,totalCount,text, status, sort,changeSortAll,id, index)

    return (
        <div className={'formik'}>
            <Formik id={id}
                initialValues={{status: status, text:text, name: username,email:email }}>

                {(props, handleBlur,handleChange,values,touched,errors) => (
                    <Form>
                        <div><b>Name:</b>{username} </div>
                        <div><b>Email: </b>{email} </div>

                        <label htmlFor={'Text'} className={'label'}> Text:
                            <Field required={'text'} className={'textarea'}
                                   component={'textarea'}
                                   type="textarea"
                                   onChange={handleChangeText}
                                   onBlur={handleBlur}
                                   value={editText}
                                   name="text"
                                   placeholder={'edit text'}
                            />
                        </label>

                        <label htmlFor={'status'} className={'label'}> Status:
                            <Field component="select" name="status" value={editStatus} className={'select'}
                                   onChange={handleChangeStatus}>
                                <option value="0">задача не выполнена</option>
                                <option value="1">задача не выполнена, отредактирована админом</option>
                                <option value="10">задача выполнена</option>
                                <option value="11">задача отредактирована админом и выполнена</option>
                            </Field>
                        </label>
                        <Button  type={'submit'} onClick={handleClick} className={'saveButton'}>Save</Button>
                        {/*<button type="submit">Submit</button>*/}
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default EditAdmin