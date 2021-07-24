import React, {useState} from "react";
import {Button} from "antd";
import {red, volcano, gold, yellow, lime, green, cyan, blue, geekblue, purple, magenta, grey} from '@ant-design/colors';
import {generate, presetPalettes} from '@ant-design/colors';
import {Field, Form, Formik, FormikProps} from 'formik';
import EntranceAdmin from "./entrance_admin";
import {useDispatch} from "react-redux";
import {getIsAuth} from "../store/addTask-reducer";

export const EditAdmin = ({text, status,email,username, ...props}) => {

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
   const handleClick =()=> {

       dispatch(getIsAuth(false))
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
    console.log(editStatus)
    console.log(editText)


    return (
        <>
            {/*<h2>EDIT TASKS ADMIN</h2>*/}


                <Formik
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
                        <Button onClick={handleClick}>Save</Button>
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