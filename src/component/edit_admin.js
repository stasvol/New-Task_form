import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Button} from "antd";
import {red, volcano, gold, yellow, lime, green, cyan, blue, geekblue, purple, magenta, grey} from '@ant-design/colors';
import {generate, presetPalettes} from '@ant-design/colors';
import {Field, Form, Formik} from 'formik';
import md5 from "md5";
import $ from 'jquery';

import { saveButton} from "../store/addTask-reducer";

const EditAdmin = ({text, status,email,username,setEditMode,sort,changeSortAll,currentPage,totalCount, ...props}) => {

    const [editStatus, setEditStatus] = useState(status)
    const [editText, setEditText] = useState(text)

    const dispatch = useDispatch()

    const handleClick = ()=> {
        dispatch(saveButton(props.id))

       const token = encodeURIComponent("beejee")
       const text =  encodeURIComponent(editText)
       const status = encodeURIComponent(editStatus)
       const params_string = `status=${status}&text=${text}&token=${token}`
       const signature = md5(params_string)
       const params_data =`${params_string}&signature=${signature}`

           $.ajax({
               url: `https://uxcandy.com/~shapoval/test-task-backend/edit/${props.index}?developer=Name`,
               crossDomain: true,
               method: 'POST',
               mimeType: "multipart/form-data",
               // contentType: false,
               // processData: false,
               data: params_data,
               dataType: "json",
               success: function(data) {
                   console.log(data);
                   props.getTaskThunkCreator(currentPage,sort,changeSortAll,totalCount)

               }
           });
   }

    const handleChangeStatus = (e) => {
        setEditStatus(e.target.value)
    }

    const handleChangeText = (e) => {
        setEditText(e.target.value)
    }

    return (
        <>
            <Formik id={props.id}
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
                        <Button  type={'submit'} onClick={handleClick}  style={{background:'#4bcf4f',color:"white"}} >Save</Button>
                        {/*<button type="submit">Submit</button>*/}
                    </Form>
                )}
            </Formik>
        </>
    )
}
export default EditAdmin