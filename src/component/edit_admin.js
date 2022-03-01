import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Button} from "antd";
import {red, volcano, gold, yellow, lime, green, cyan, blue, geekblue, purple, magenta, grey} from '@ant-design/colors';
import {generate, presetPalettes} from '@ant-design/colors';
import {Field, Form, Formik} from 'formik';
import md5 from "md5";
import $ from 'jquery';

import { saveButton} from "../store/addTask-reducer";

export const EditAdmin = ({text, status,email,username,setEditMode,sort,changeSortAll,currentPage,totalCount, ...props}) => {

    // const colors = generate('#1890ff');
    // console.log(colors);
    // console.log(presetPalettes);

    // const [isAuth, setIsAuth] = useState(true)
    const [editStatus, setEditStatus] = useState(status)
    const [editText, setEditText] = useState(text)

    const dispatch = useDispatch()

    // props.handlerProps = () => {
    //     props.setIsAuth(false)
    // }

   const handleClick = ()=> {

        dispatch(saveButton(props.id))

       const token = encodeURIComponent("beejee")
       const text =  encodeURIComponent(editText)
       const status = encodeURIComponent(editStatus)
       const params_string = `status=${status}&text=${text}&token=${token}`
       const signature = md5(params_string)
       const params_data =`${params_string}&signature=${signature}`

       // $(document).ready(function() {
       //     const form = new FormData();
       //     // form.append("username", "Example");
       //     // form.append("email", "example@example.com");
       //     form.append("text", {editText});
       //     form.append("status", {editStatus});
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
       // });


       // const  response =  fetch(`https://uxcandy.com/~shapoval/test-task-backend/edit/:${props.index}?developer=Name`,{
       //     // credentials:'same-origin',
       //     method: 'POST',
       //     // mimeType: "multipart/form-data",
       //     body: params_data,
       //     headers:{
       //         'Content-Type':'application/json'
       //     }
       // })
       //     const data = await response
       //     console.log(params_data )
       //
       //
       // // console.log(params_data)
       // // setEditMode(false)
       // // console.log(editText,editStatus)
       // // dispatch(getIsAuth(false))
   }

    const handleChangeStatus = (e) => {
        setEditStatus(e.target.value)
    }
    const handleChangeText = (e) => {
        setEditText(e.target.value)
    }
    // const handleClickEdit = () => {
    //     setIsAuth(!isAuth)
    // }



    return (
        <>
            {/*<h2>EDIT TASKS ADMIN</h2>*/}


                <Formik id={props.id}
                initialValues={{status: status, text:text, name: username,email:email }}
                // onSubmit={(values, actions) => {
                //     setTimeout(() => {
                //         alert(JSON.stringify(values, null, 2));
                //         actions.setSubmitting(false);
                //     }, 1000);
                // }}
            >
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



            {/*<Formik*/}
            {/*    initialValues={{  status: 'задача не выполнена', }}*/}
            {/*    // onSubmit={(values, actions) => {*/}
            {/*    //     setTimeout(() => {*/}
            {/*    //         alert(JSON.stringify(values, null, 2));*/}
            {/*    //         actions.setSubmitting(false);*/}
            {/*    //     }, 1000);*/}
            {/*    // }}*/}
            {/*>*/}
            {/*    {(props) => (*/}
            {/*        <Form>*/}
            {/*            <Field as="select" name="status" className={'select' }>*/}
            {/*                <option value="0">задача не выполнена</option>*/}
            {/*                <option value="1">задача не выполнена, отредактирована админом</option>*/}
            {/*                <option value="10">задача выполнена</option>*/}
            {/*                <option value="11">задача отредактирована админом и выполнена</option>*/}
            {/*            </Field>*/}
            {/*            /!*<button type="submit">Submit</button>*!/*/}
            {/*        </Form>*/}
            {/*    )}*/}
            {/*</Formik>*/}

        </>
    )
}